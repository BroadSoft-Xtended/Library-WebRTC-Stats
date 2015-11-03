module.exports = require('bdsft-sdk-view')(StatsView, {
  template: require('../../js/templates'), 
  style: require('../../js/styles'),
  constants: require('../constants')
});

var Utils = require('webrtc-core').utils;
var constants = require('../constants');

function StatsView(eventbus, stats) {
  var self = {};

  self.model = stats;
  
  self.bindings = {
    'statsContainerId': {
      stats: 'statsContainerId'
    }
  }

  self.elements = ['statsVar', 'statsContainer'].concat(constants.keys).concat(constants.keysAvg);

  self.updateStatsContainerId = function(value){
    self.statsContainer && self.statsContainer.attr('id', value);
  };

  self.listeners = function() {
    self.statsVar.click(function() {
      var selected = Utils.camelize(Utils.getElement(this).attr('data-type') + ' ' + Utils.getElement(this).attr('data-var'));
      stats.select(selected);
    });
    eventbus.on('started', function(){
      self.statsContainer && self.statsContainer.text('');
    });
  };

  return self;
}