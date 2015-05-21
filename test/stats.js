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
    eventbus = bdsft_client_instances.test.eventbus;
  });

  it('stats on startup', function() {
    testUA.isVisible(statsview.stats, false);
  });

  it('stats show and hide', function() {
    stats.show();
    testUA.isVisible(statsview.stats, true);
    stats.hide();
    testUA.isVisible(statsview.stats, false);
  });
});