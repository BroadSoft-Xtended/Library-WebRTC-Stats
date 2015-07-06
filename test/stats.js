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
  });

  it('on startup', function() {
    testUA.isVisible(statsview.view.find('.classes:first'), false);
  });

  it('show and hide', function() {
    stats.show();
    testUA.isVisible(statsview.view.find('.classes:first'), true);
    stats.hide();
    testUA.isVisible(statsview.view.find('.classes:first'), false);
  });

  it('statsContainerId', function() {
    stats.statsContainerId = 'teststatscontainerid';
    expect(statsview.statsContainer.attr('id')).toEqual('teststatscontainerid');
  });
});