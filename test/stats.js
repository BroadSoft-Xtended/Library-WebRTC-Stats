var jsdom = require('mocha-jsdom');
expect = require('expect');
jsdom({});

describe('stats', function() {

  before(function() {
    core = require('webrtc-core');
    testUA = core.testUA;
    ExSIP = core.exsip;
    core.utils.isChrome = function(){return true;}
    core.utils.majorVersion = function(){return 42;}
    testUA.createCore('sipstack');
    testUA.mockWebRTC();
    testUA.createModelAndView('stats', {
      stats: require('../')
    });
    eventbus = bdsft_client_instances.test.eventbus;
  });

  it('on startup', function() {
    testUA.isVisible(statsview.stats, false);
  });

  it('show and hide', function() {
    stats.show();
    testUA.isVisible(statsview.stats, true);
    stats.hide();
    testUA.isVisible(statsview.stats, false);
  });

  it('statsContainerId', function() {
    stats.statsContainerId = 'teststatscontainerid';
    expect(statsview.statsContainer.attr('id')).toEqual('teststatscontainerid');
  });
});