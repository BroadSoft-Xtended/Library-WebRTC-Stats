module.exports = require('webrtc-core').bdsft.Model(Stats, {
  config: require('../../js/config.js')
});

var Utils = require('webrtc-core').utils;
var constants = require('../constants');

function Stats(eventbus, debug, sipstack, urlconfig) {
  var self = {};

  self.statsMod = require('../../js/stats')(self);

  self.props = ['classes', 'visible', 'statsContainerId', 'statSelected'].concat(constants.keys).concat(constants.keysAvg)
  .concat(constants.hasKeys).concat(constants.hasKeysAvg);

  self.bindings = {
    'classes': {
      stats: ['visible', 'enableCallStats', 'statSelected'].concat(constants.hasKeys).concat(constants.hasKeysAvg)
    }
  }

  var intervalId = null;

  var isSupported = function(){
    return Utils.isChrome() && Utils.majorVersion() >= 25
  };

  self.init = function() {
    // disable call stats if not supported
    if(!isSupported()) {
      self.enableCallStats = false;
    } else {
      self.enableCallStats = urlconfig.enableCallStats || self.enableCallStats;
    }
  };

  self.select = function(stat) {
    self.statSelected = stat;
  };

  var getElement = function(type, name, isAvg) {
    return self[Utils.camelize((isAvg ? 'Avg ' : '') + type + ' ' + name)];
  };

  self.getReportById = function(reports, id) {
    for (var i = 0; i < reports.length; i++) {
      if (reports[i].id === id) {
        return reports[i];
      }
    }
    return null;
  };

  self.processStats = function() {
    if(!sipstack.activeSession) {
      self.stop();
      return;
    }

    var peerConnection = sipstack.activeSession.rtcMediaHandler.peerConnection;

    peerConnection.getStats(function(stats) {
      var results = stats.result();
      var reports = [];
      for (var i = 0; i < results.length; ++i) {
        var res = results[i];
        var report = self.getReportById(reports, res.id);
        if (!report) {
          report = {};
          report.type = res.type;
          report.id = res.id;
        }

        var names = res.names();
        var values = [];
        for (var j = 0; j < names.length; j++) {
          var name = names[j];
          if (!name) {
            continue;
          }
          var value = res.stat(name);
          values.push(name);
          values.push(value);
        }
        var valueObj = {};
        valueObj.timestamp = res.timestamp;
        valueObj.values = values;
        report.stats = valueObj;
        reports.push(report);
      }
      var data = {
        "lid": 1,
        "pid": sipstack.getSessionId(),
        "reports": reports
      };
      self.statsMod.addStats(data);
    });
  };

  self.getDataSerie = function(type, label, sessionId) {
    var dataSeries = getDataSeriesByLabel(sessionId || sipstack.getSessionId(), type, label);
    var result;
    for (var i = 0; i < dataSeries.length; i++) {
      var dataSerie = dataSeries[i];
      if (!result || dataSerie.getAvg() > result.getAvg()) {
        result = dataSerie;
      }
    }
    return result;
  };

  self.setAllAvg = function(stats) {
    for(var i = 0; i < constants.keysAvg.length; i++) {
      var key = constants.keysAvg[i];
      self[key] = stats[key];
    };
  };

  self.getAll = function() {
    return Utils.pick(self, constants.keys);
  };

  self.getAllAvg = function() {
    return Utils.pick(self, constants.keysAvg);
  };

  self.getStatValues = function(type, label, sessionId) {
    var dataSerie = this.getDataSerie(type, label, sessionId);
    return dataSerie ? dataSerie.dataPoints_.map(function(e) {
      return e.value;
    }) : null;
  };

  self.getStatAvg = function(type, label, sessionId) {
    var dataSerie = this.getDataSerie(type, label, sessionId);
    return dataSerie ? dataSerie.getAvg() : null;
  };

  self.getValue = function(type, name) {
    return getElement(type, name);
  };

  self.getAvg = function(type, name) {
    return Math.round(getElement(type, name, true) * 100) / 100.0;
  };

  self.onAddStats = function(peerConnectionElement, reportType, reportId, statsData) {
    self.props.forEach(function(prop) {
      var match = prop.match(/(audio|video)(.*)/);
      if (!match) {
        return;
      }
      var label = Utils.lowercaseFirstLetter(match[2]);
      var type = match[1];
      if (self.statsMod.matchesType(label, type, statsData)) {
        var value = self.statsMod.getLastValue(peerConnectionElement, reportType, reportId, label);
        if (value != null) {
          self[prop] = value;
          var avg = self.statsMod.getAvgValue(peerConnectionElement, reportType, reportId, label);
          self[Utils.camelize('avg '+ prop)] = Math.round(avg * 100) / 100.0;
        } else {}
      }
    });
  };

  var start = function() {
    if (!intervalId && self.enableCallStats && Utils.isChrome()) {
      intervalId = setInterval(function() {
        self.processStats();
      }, 1000);
    }
  };

  var stop = function() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };

  self.listeners = function(databinder) {
    databinder.onModelPropChange(constants.keys.concat(constants.keysAvg), function(value, name) {
      value = value+'';
      self[Utils.camelize('has '+name)] = value !== '' && value !== 'undefined' && value !== 'undefinedxundefined' && value !== 'NaN';
    });
    eventbus.on("ended", function(e) {
      stop();
    });
    eventbus.on("started", function(e) {
      self.statsContainerId = sipstack.getSessionId() + '-1';
      start();
    });
  };

  return self;
}