# Stats

Displays stats for the active call.

Model : bdsft_webrtc.default.stats

View : bdsft_webrtc.default.statsview

Dependencies : [SIP Stack](https://github.com/BroadSoft-Xtended/Library-WebRTC-SIPStack)

## Elements
<a name="elements"></a>

Element                            |Type  |Description
-----------------------------------|------|-------------------------------------------------------------
audioAudioInputLevel                |div    |The input level of the audio stream.
audioAudioOutputLevel               |div    |The output level of the audio stream.
audioGoogJitterReceived             |div    |The jitter of the audio stream.
audioGoogRtt                        |div    |The RTT of the audio stream.
audioKiloBitsReceivedPerSecond      |div    |The (average) size of the audio stream received in kb/s.
audioKiloBitsSentPerSecond          |div    |The size of the audio stream sent in kb/s.
audioPacketsLost                    |div    |The lost packets of the audio stream.
audioPacketsLostPer                 |div    |The lost packets of the audio stream in percentage.
avgAudioAudioInputLevel             |div    |The average input level of the audio stream.
avgAudioAudioOutputLevel            |div    |The average output level of the audio stream.
avgAudioGoogJitterReceived          |div    |The average jitter of the audio stream.
avgAudioGoogRtt                     |div    |The average RTT of the audio stream.
avgAudioKiloBitsReceivedPerSecond   |div    |The average size of the audio stream received in kb/s.
avgAudioKiloBitsSentPerSecond       |div    |The average size of the audio stream sent in kb/s.
avgAudioPacketsLost                 |div    |The average lost packets of the audio stream.
avgAudioPacketsLostPer              |div    |The average lost packets of the audio stream in percentage.
avgVideoGoogFrameHeightReceived     |div    |The average frame height of the received video stream.
avgVideoGoogFrameHeightSent         |div    |The average frame height of the sent video stream.
avgVideoGoogFrameRateReceived       |div    |The average frame rate of the received video stream.
avgVideoGoogFrameRateSent           |div    |The average frame rate of the sent video stream.
avgVideoGoogFrameWidthReceived      |div    |The average frame width of the received video stream.
avgVideoGoogFrameWidthSent          |div    |The average frame width of the sent video stream.
avgVideoKiloBitsReceivedPerSecond   |div    |The average size of the video stream received in kb/s.
avgVideoKiloBitsSentPerSecond       |div    |The average size of the video stream sent in kb/s.
avgVideoPacketsLost                 |div    |The average lost packets of the video stream.
avgVideoPacketsLostPer              |div    |The average lost packets of the video stream in percentage.
videoGoogFrameHeightReceived        |div    |The frame height of the received video stream.
videoGoogFrameHeightSent            |div    |The frame height of the sent video stream.
videoGoogFrameRateReceived          |div    |The frame rate of the received video stream.
videoGoogFrameRateSent              |div    |The frame rate of the sent video stream.
videoGoogFrameWidthReceived         |div    |The frame width of the received video stream.
videoGoogFrameWidthSent             |div    |The frame width of the sent video stream.
videoKiloBitsReceivedPerSecond      |div    |The size of the video stream received in kb/s.
videoKiloBitsSentPerSecond          |div    |The size of the video stream sent in kb/s.
videoPacketsLost                    |div    |The lost packets of the video stream.
videoPacketsLostPer                 |div    |The lost packets of the video stream in percentage.

Property                           |Type    |Description
-----------------------------------|--------|-------------------------------------------------------------
audioAudioInputLevel                |number   |The input level of the audio stream.
audioAudioOutputLevel               |number   |The output level of the audio stream.
audioGoogJitterReceived             |number   |The jitter of the audio stream.
audioGoogRtt                        |number   |The RTT of the audio stream.
audioKiloBitsReceivedPerSecond      |number   |The (average) size of the audio stream received in kb/s.
audioKiloBitsSentPerSecond          |number   |The size of the audio stream sent in kb/s.
audioPacketsLost                    |number   |The lost packets of the audio stream.
audioPacketsLostPer                 |number   |The lost packets of the audio stream in percentage.
avgAudioAudioInputLevel             |number   |The average input level of the audio stream.
avgAudioAudioOutputLevel            |number   |The average output level of the audio stream.
avgAudioGoogJitterReceived          |number   |The average jitter of the audio stream.
avgAudioGoogRtt                     |number   |The average RTT of the audio stream.
avgAudioKiloBitsReceivedPerSecond   |number   |The average size of the audio stream received in kb/s.
avgAudioKiloBitsSentPerSecond       |number   |The average size of the audio stream sent in kb/s.
avgAudioPacketsLost                 |number   |The average lost packets of the audio stream.
avgAudioPacketsLostPer              |number   |The average lost packets of the audio stream in percentage.
avgVideoGoogFrameHeightReceived     |number   |The average frame height of the received video stream.
avgVideoGoogFrameHeightSent         |number   |The average frame height of the sent video stream.
avgVideoGoogFrameRateReceived       |number   |The average frame rate of the received video stream.
avgVideoGoogFrameRateSent           |number   |The average frame rate of the sent video stream.
avgVideoGoogFrameWidthReceived      |number   |The average frame width of the received video stream.
avgVideoGoogFrameWidthSent          |number   |The average frame width of the sent video stream.
avgVideoKiloBitsReceivedPerSecond   |number   |The average size of the video stream received in kb/s.
avgVideoKiloBitsSentPerSecond       |number   |The average size of the video stream sent in kb/s.
avgVideoPacketsLost                 |number   |The average lost packets of the video stream.
avgVideoPacketsLostPer              |number   |The average lost packets of the video stream in percentage.
videoGoogFrameHeightReceived        |number   |The frame height of the received video stream.
videoGoogFrameHeightSent            |number   |The frame height of the sent video stream.
videoGoogFrameRateReceived          |number   |The frame rate of the received video stream.
videoGoogFrameRateSent              |number   |The frame rate of the sent video stream.
videoGoogFrameWidthReceived         |number   |The frame width of the received video stream.
videoGoogFrameWidthSent             |number   |The frame width of the sent video stream.
videoKiloBitsReceivedPerSecond      |number   |The size of the video stream received in kb/s.
videoKiloBitsSentPerSecond          |number   |The size of the video stream sent in kb/s.
videoPacketsLost                    |number   |The lost packets of the video stream.
videoPacketsLostPer                 |number   |The lost packets of the video stream in percentage.

## Configuration
<a name="configuration"></a>

Property         |Type     |Default  |Description
-----------------|---------|---------|---------------------------------
enableCallStats  |boolean  |true     |True if call stats are enabled.


## Methods
<a name="methods"></a>

Method                |Parameters             |Description
----------------------|-----------------------|---------------------------------------------------------------------------------------------------------------
getAvg(type, name)     |type : audio or video, name : string |Gets the stats average property by using camel case of type and name, eg. video and kiloBitsSentPerSecond will return videoKiloBitsSentPerSecondAvg.
getValue(type, name)   |type : audio or video, name : string   |Gets the stats property by using camel case of type and name, eg. video and kiloBitsSentPerSecond will return videoKiloBitsSentPerSecond.
