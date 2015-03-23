var jsdom = require('mocha-jsdom');
expect = require('expect');
jsdom({});

describe('stats', function() {

  before(function() {
    core = require('webrtc-core');
    testUA = core.testUA;
    ExSIP = core.exsip;
    config = {};
    testUA.createCore('configuration', config);
    testUA.createCore('sipstack', config);
    testUA.mockWebRTC();
    testUA.createModelAndView('stats', {
      stats: require('../')
    });
    eventbus = bdsft_client_instances.eventbus_test;
  });

  it('stats on startup', function() {
    testUA.isVisible(statsview.stats, false);
  });

  it('stats on toggleView', function() {
    eventbus.toggleView(core.constants.VIEW_STATS);
    testUA.isVisible(statsview.stats, true);
    eventbus.toggleView(core.constants.VIEW_STATS);
    testUA.isVisible(statsview.stats, false);
  });
});