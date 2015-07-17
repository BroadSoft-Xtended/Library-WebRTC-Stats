var Utils = require('webrtc-core').utils;
var C = {};
module.exports = C;

C.keys = ['videoKiloBitsSentPerSecond', 'audioKiloBitsSentPerSecond',
    'videoKiloBitsReceivedPerSecond', 'audioKiloBitsReceivedPerSecond', 'videoPacketsLost', 'videoPacketsLostPer',
    'audioPacketsLost', 'audioPacketsLostPer', 'videoGoogFrameRateSent', 'videoGoogFrameRateReceived', 'audioAudioInputLevel',
    'audioAudioOutputLevel', 'videoGoogFrameWidthReceived', 'videoGoogFrameHeightReceived', 'videoGoogFrameWidthSent', 'videoGoogFrameHeightSent',
    'audioGoogRtt', 'audioGoogJitterReceived'];

C.keysAvg = C.keys.map(function(key){ return Utils.camelize('avg ' + key)});
C.hasKeys = C.keys.map(function(key){ return Utils.camelize('has ' + key)});
C.hasKeysAvg = C.keysAvg.map(function(key){ return Utils.camelize('has ' + key)});
C.STYLES = {
  statsColor: '#999999'
}