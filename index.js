(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,2012,2012]]},
		{name:"index_atlas_2", frames: [[0,0,1402,1586]]},
		{name:"index_atlas_3", frames: [[0,0,1425,1425]]},
		{name:"index_atlas_4", frames: [[0,0,1425,1425]]},
		{name:"index_atlas_5", frames: [[0,0,1062,1340]]},
		{name:"index_atlas_6", frames: [[0,0,1026,1329]]},
		{name:"index_atlas_7", frames: [[0,0,1358,983]]},
		{name:"index_atlas_8", frames: [[0,0,819,1183],[0,1185,1573,569]]},
		{name:"index_atlas_9", frames: [[0,569,953,799],[955,569,953,799],[0,0,1573,567]]},
		{name:"index_atlas_10", frames: [[757,0,660,1085],[0,995,717,1020],[0,0,755,993],[719,1087,988,647]]},
		{name:"index_atlas_11", frames: [[1301,0,475,1045],[0,1047,525,862],[527,1047,504,851],[0,0,1299,383],[1521,1047,486,850],[1033,1047,486,879],[0,385,714,517]]},
		{name:"index_atlas_12", frames: [[640,862,480,480],[1122,422,470,470],[0,326,551,551],[332,879,306,794],[1720,0,247,773],[0,879,330,890],[0,1771,1059,262],[1137,0,581,420],[640,1352,731,277],[1061,1631,609,331],[0,0,1135,324],[1122,894,456,456],[553,326,534,534]]},
		{name:"index_atlas_13", frames: [[1553,719,296,240],[1020,1015,297,280],[412,322,328,328],[1198,0,384,384],[1319,961,147,484],[841,648,177,584],[0,268,410,410],[841,1234,160,526],[1759,961,119,385],[317,1045,191,649],[0,680,227,710],[1003,1701,819,66],[1003,1561,485,138],[1071,386,406,260],[1880,317,89,1084],[1672,961,85,720],[1626,1769,255,166],[0,0,695,266],[921,1769,247,199],[1392,1769,232,190],[742,322,327,324],[510,1045,329,360],[1584,317,294,400],[1298,648,253,311],[1020,648,276,365],[510,1407,329,358],[1003,1297,304,262],[1584,0,455,315],[599,1767,320,164],[0,1848,597,170],[1468,961,202,331],[0,1392,315,454],[697,0,499,320],[1170,1769,220,220],[229,680,363,363]]},
		{name:"index_atlas_14", frames: [[1546,713,109,124],[904,802,95,108],[772,0,187,209],[1973,690,68,187],[251,376,79,267],[961,0,110,355],[1973,453,66,235],[1945,182,88,269],[0,129,273,118],[0,780,69,152],[803,837,87,87],[71,780,69,152],[1534,839,84,77],[1219,136,97,72],[332,376,140,138],[1073,0,260,134],[1924,773,41,133],[1027,357,43,133],[941,667,118,133],[1295,742,91,133],[885,211,72,133],[1388,742,91,133],[1744,773,90,133],[1836,773,86,133],[657,703,102,133],[332,516,107,158],[1657,713,85,158],[1629,393,116,158],[832,517,107,158],[550,571,105,158],[1350,582,102,158],[696,543,107,158],[1870,613,101,158],[1766,613,102,158],[1481,742,51,158],[1244,582,104,158],[309,676,97,158],[1548,553,107,158],[1747,393,109,158],[0,620,101,158],[1657,553,107,158],[474,411,109,158],[441,571,107,158],[1137,582,105,158],[585,411,109,158],[1454,582,90,158],[111,460,108,158],[1215,422,109,158],[103,620,101,158],[805,677,97,158],[711,383,119,158],[408,731,85,158],[1326,422,109,158],[1073,347,140,158],[1437,422,109,158],[885,357,140,158],[1858,453,109,158],[1027,507,108,158],[206,645,101,158],[0,460,109,158],[1801,182,142,209],[1073,136,144,209],[1335,0,158,209],[275,165,144,209],[567,200,142,209],[1359,211,133,209],[1061,667,68,209],[421,165,144,209],[1494,211,133,209],[1655,182,144,209],[1495,0,158,209],[0,249,128,209],[1219,211,138,209],[130,249,119,209],[326,0,244,163],[0,0,324,127],[1655,0,180,180],[572,0,198,198],[1837,0,180,180],[495,731,106,120],[941,517,80,118],[1131,742,80,154],[1213,742,80,154],[775,703,26,315],[832,383,45,105],[1001,878,107,15],[1001,895,112,10],[1295,877,141,42],[603,838,170,51],[142,805,100,100],[244,836,100,100],[711,211,172,170],[346,891,315,25],[1620,873,105,45]]}
];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_189 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_185 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_198 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_184 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_188 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_179 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_197 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_196 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_178 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_180 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_181 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_183 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_177 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_182 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_172 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_187 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_171 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_173 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_170 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_174 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_176 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_186 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_175 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_169 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_168 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_165 = function() {
	this.initialize(ss["index_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_156 = function() {
	this.initialize(ss["index_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_152 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_151 = function() {
	this.initialize(ss["index_atlas_11"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_161 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_149 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_148 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_166 = function() {
	this.initialize(img.CachedBmp_166);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2203,1065);


(lib.CachedBmp_157 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_167 = function() {
	this.initialize(img.CachedBmp_167);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2523,1220);


(lib.CachedBmp_150 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_143 = function() {
	this.initialize(ss["index_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_142 = function() {
	this.initialize(ss["index_atlas_10"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_141 = function() {
	this.initialize(ss["index_atlas_10"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_137 = function() {
	this.initialize(img.CachedBmp_137);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2337,160);


(lib.CachedBmp_140 = function() {
	this.initialize(ss["index_atlas_9"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_135 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_133 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_134 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_132 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_128 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_127 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_126 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_129 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_124 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_125 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_122 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_138 = function() {
	this.initialize(img.CachedBmp_138);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2718,465);


(lib.CachedBmp_120 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_119 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_121 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_118 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_117 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_116 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_136 = function() {
	this.initialize(img.CachedBmp_136);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2645,465);


(lib.CachedBmp_115 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_114 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_113 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_112 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_111 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_110 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_109 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_108 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_107 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_106 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_105 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_104 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_103 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_102 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_101 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_100 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_99 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_98 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_96 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_97 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_155 = function() {
	this.initialize(img.CachedBmp_155);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2133,2128);


(lib.CachedBmp_95 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_93 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_94 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_92 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_91 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_89 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_90 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_88 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_87 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_86 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_85 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_84 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_83 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_82 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_81 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_80 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_79 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_78 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_77 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_76 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_75 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_73 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_72 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_71 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_66 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_64 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_65 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["index_atlas_11"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_61 = function() {
	this.initialize(ss["index_atlas_11"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["index_atlas_11"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_162 = function() {
	this.initialize(img.CachedBmp_162);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2598,2598);


(lib.CachedBmp_53 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_158 = function() {
	this.initialize(img.CachedBmp_158);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2599,2599);


(lib.CachedBmp_54 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_52 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_51 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_50 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_48 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_153 = function() {
	this.initialize(img.CachedBmp_153);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2140,2135);


(lib.CachedBmp_39 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_123 = function() {
	this.initialize(img.CachedBmp_123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3272,1085);


(lib.CachedBmp_55 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["index_atlas_10"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["index_atlas_12"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["index_atlas_11"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["index_atlas_9"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["index_atlas_14"]);
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Group_2_0 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["index_atlas_11"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_13"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(img.CachedBmp_22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3189,313);


(lib.CachedBmp_62 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_163 = function() {
	this.initialize(img.CachedBmp_163);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3332,3332);


(lib.CachedBmp_2 = function() {
	this.initialize(img.CachedBmp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3867,2193);


(lib.CachedBmp_164 = function() {
	this.initialize(img.CachedBmp_164);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4452,4452);


(lib.CachedBmp_160 = function() {
	this.initialize(img.CachedBmp_160);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4452,4452);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.STARTMAIN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.CachedBmp_198();
	this.instance.setTransform(40.65,19.65,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_197();
	this.instance_1.setTransform(-1.65,-9.65,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_196();
	this.instance_2.setTransform(-16,-24,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.STARTMAIN, new cjs.Rectangle(-16,-24,192,192), null);


(lib.STARTINS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedBmp_198();
	this.instance.setTransform(11.15,19.65,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_197();
	this.instance_1.setTransform(-31.15,-9.65,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_196();
	this.instance_2.setTransform(-45.5,-24,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.STARTINS, new cjs.Rectangle(-45.5,-24,192,192), null);


(lib.START = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedBmp_198();
	this.instance.setTransform(40.65,19.65,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_197();
	this.instance_1.setTransform(-1.65,-9.65,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_196();
	this.instance_2.setTransform(-16,-24,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.START, new cjs.Rectangle(-16,-24,192,192), null);


(lib.RESTART2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_189();
	this.instance.setTransform(129.65,48.55,0.3274,0.3274);

	this.instance_1 = new lib.CachedBmp_188();
	this.instance_1.setTransform(68.65,54,0.3274,0.3274);

	this.instance_2 = new lib.CachedBmp_187();
	this.instance_2.setTransform(42.4,13.45,0.3274,0.3274);

	this.instance_3 = new lib.CachedBmp_186();
	this.instance_3.setTransform(28.9,0,0.3274,0.3274);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.9,0,180.4,180.4);


(lib.RESTART = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedBmp_185();
	this.instance.setTransform(129.65,48.6,0.3759,0.3759);

	this.instance_1 = new lib.CachedBmp_184();
	this.instance_1.setTransform(67.85,45.65,0.3759,0.3759);

	this.instance_2 = new lib.CachedBmp_183();
	this.instance_2.setTransform(42.45,13.45,0.3759,0.3759);

	this.instance_3 = new lib.CachedBmp_182();
	this.instance_3.setTransform(28.9,0,0.3759,0.3759);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.9,0,180.5,180.5);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_167();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,1261.5,610), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_166();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,1101.5,532.5), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_165();
	this.instance.setTransform(-0.2,-0.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(-0.2,-0.2,237.5,522.5), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_164();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,2226,2226), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_163();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,1666,1666), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_162();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,1299,1299), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_161();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,712.5,712.5), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_160();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,2226,2226), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.CachedBmp_163();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,1666,1666), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.CachedBmp_158();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,1299.5,1299.5), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.CachedBmp_157();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,712.5,712.5), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_2 = new lib.CachedBmp_156();
	this.instance_2.setTransform(-0.15,-0.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(-0.1,-0.1,330,542.5), null);


(lib.MAZEFAIL2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_155();
	this.instance.setTransform(0.25,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MAZEFAIL2, new cjs.Rectangle(0.3,0,1066.5,1064), null);


(lib.MAZE2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_155();
	this.instance.setTransform(0.25,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MAZE2, new cjs.Rectangle(0.3,0,1066.5,1064), null);


(lib.MAZE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_153();
	this.instance.setTransform(0.25,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MAZE, new cjs.Rectangle(0.3,0,1070,1067.5), null);


(lib.LOSTMAZE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_153();
	this.instance.setTransform(0.25,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LOSTMAZE, new cjs.Rectangle(0.3,0,1070,1067.5), null);


(lib.GAMEOVER = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_120();
	this.instance.setTransform(652.3,520.6,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_119();
	this.instance_1.setTransform(636.35,520.6,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_118();
	this.instance_2.setTransform(583.15,520.6,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_117();
	this.instance_3.setTransform(543.1,520.6,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_116();
	this.instance_4.setTransform(512.85,520.6,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_115();
	this.instance_5.setTransform(456,520.6,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_114();
	this.instance_6.setTransform(416.75,520.6,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_113();
	this.instance_7.setTransform(379.35,520.6,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_112();
	this.instance_8.setTransform(334.2,520.6,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_111();
	this.instance_9.setTransform(799.55,394.25,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_110();
	this.instance_10.setTransform(763.55,394.25,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_109();
	this.instance_11.setTransform(712.5,394.25,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_108();
	this.instance_12.setTransform(665.85,394.25,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_107();
	this.instance_13.setTransform(600.15,394.25,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_106();
	this.instance_14.setTransform(555.7,394.25,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_105();
	this.instance_15.setTransform(508.75,394.25,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_104();
	this.instance_16.setTransform(465.2,394.25,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_103();
	this.instance_17.setTransform(420.75,394.25,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_102();
	this.instance_18.setTransform(381.8,394.25,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_101();
	this.instance_19.setTransform(336.35,394.25,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_100();
	this.instance_20.setTransform(294.8,394.25,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_99();
	this.instance_21.setTransform(247.85,394.25,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_98();
	this.instance_22.setTransform(200.25,394.25,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_97();
	this.instance_23.setTransform(153.6,394.25,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_96();
	this.instance_24.setTransform(707.7,318.6,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_95();
	this.instance_25.setTransform(660.1,318.6,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_94();
	this.instance_26.setTransform(614.4,318.6,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_93();
	this.instance_27.setTransform(567.45,318.6,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_92();
	this.instance_28.setTransform(519.85,318.6,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_91();
	this.instance_29.setTransform(481.6,318.6,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_90();
	this.instance_30.setTransform(434,318.6,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_89();
	this.instance_31.setTransform(386.65,318.6,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_88();
	this.instance_32.setTransform(343.15,318.6,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_87();
	this.instance_33.setTransform(301.6,318.6,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_86();
	this.instance_34.setTransform(248.8,318.6,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_85();
	this.instance_35.setTransform(695.95,242.9,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_84();
	this.instance_36.setTransform(648.35,242.9,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_83();
	this.instance_37.setTransform(585.05,242.9,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_82();
	this.instance_38.setTransform(537.45,242.9,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_81();
	this.instance_39.setTransform(474.15,242.9,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_80();
	this.instance_40.setTransform(406.55,242.9,0.5,0.5);

	this.instance_41 = new lib.CachedBmp_79();
	this.instance_41.setTransform(359.2,242.9,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_78();
	this.instance_42.setTransform(315.7,242.9,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_77();
	this.instance_43.setTransform(268.1,242.9,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_76();
	this.instance_44.setTransform(871.55,126.35,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_75();
	this.instance_45.setTransform(808.45,126.35,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_74();
	this.instance_46.setTransform(738.4,126.35,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_73();
	this.instance_47.setTransform(675.25,126.35,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_72();
	this.instance_48.setTransform(613,126.35,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_71();
	this.instance_49.setTransform(528.75,126.35,0.5,0.5);

	this.instance_50 = new lib.CachedBmp_70();
	this.instance_50.setTransform(465.6,126.35,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_69();
	this.instance_51.setTransform(407.85,126.35,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_68();
	this.instance_52.setTransform(382.75,126.35,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_67();
	this.instance_53.setTransform(319.6,126.35,0.5,0.5);

	this.instance_54 = new lib.CachedBmp_66();
	this.instance_54.setTransform(249.55,126.35,0.5,0.5);

	this.instance_55 = new lib.CachedBmp_65();
	this.instance_55.setTransform(189.3,126.35,0.5,0.5);

	this.instance_56 = new lib.CachedBmp_64();
	this.instance_56.setTransform(134.2,126.35,0.5,0.5);

	this.instance_57 = new lib.CachedBmp_63();
	this.instance_57.setTransform(83.5,126.35,0.5,0.5);

	this.instance_58 = new lib.CachedBmp_62();
	this.instance_58.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GAMEOVER, new cjs.Rectangle(0,0,1006,1006), null);


(lib.MAZE_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_61();
	this.instance.setTransform(-2,-19.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MAZE_1, new cjs.Rectangle(-2,-19.7,649.5,191.5), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_60();
	this.instance.setTransform(168.55,143.3,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_59();
	this.instance_1.setTransform(2.6,14.65,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_58();
	this.instance_2.setTransform(-0.05,0,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_57();
	this.instance_3.setTransform(303.4,609.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,0,533.6,692.8), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_56();
	this.instance.setTransform(110.8,140.25,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_55();
	this.instance_1.setTransform(0,14.75,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_54();
	this.instance_2.setTransform(168.25,0,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_53();
	this.instance_3.setTransform(96.8,608.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,515.8,689.6), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group_2_0();
	this.instance.setTransform(-361.55,-202.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(-361.5,-202.2,1402,1586), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_52();
	this.instance.setTransform(261.65,514.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_51();
	this.instance_1.setTransform(383.6,383.6,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_50();
	this.instance_2.setTransform(388.25,729.3,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_50();
	this.instance_3.setTransform(115.35,729.3,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_48();
	this.instance_4.setTransform(251.8,729.3,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_47();
	this.instance_5.setTransform(196.15,383.7,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_46();
	this.instance_6.setTransform(0,136.4,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_45();
	this.instance_7.setTransform(558.35,721.55,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_44();
	this.instance_8.setTransform(4.65,702.2,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_43();
	this.instance_9.setTransform(510.8,702.2,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_42();
	this.instance_10.setTransform(82.45,304.1,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_41();
	this.instance_11.setTransform(202.6,-14.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,-14.9,679,879.1), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_40();
	this.instance.setTransform(327.15,-2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_39();
	this.instance_1.setTransform(163.45,13.55,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_38();
	this.instance_2.setTransform(632,25.5,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_37();
	this.instance_3.setTransform(476.7,14.75,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_36();
	this.instance_4.setTransform(31.85,21.6,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_35();
	this.instance_5.setTransform(0,-38.5,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_34();
	this.instance_6.setTransform(0,-22.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,-38.5,786.5,299.8), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A02U3MAAAgptMAptAAAMAAAAptg");
	mask.setTransform(133.5,133.5);

	// Layer_3
	this.instance = new lib.CachedBmp_33();
	this.instance.setTransform(149.2,72,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_32();
	this.instance_1.setTransform(61.3,82.5,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_31();
	this.instance_2.setTransform(20,20,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_30();
	this.instance_3.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,267,267), null);


(lib.END = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(30.8,36.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.CachedBmp_4();
	this.instance_1.setTransform(-5.45,-5.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.END, new cjs.Rectangle(-5.4,-5.5,181.5,181.5), null);


(lib.BORDER2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-8,-8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BORDER2, new cjs.Rectangle(-8,-8,1933.5,1096.5), null);


(lib.BORDER = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-8,-8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BORDER, new cjs.Rectangle(-8,-8,1933.5,1096.5), null);


(lib.PORTAL2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_181();
	this.instance.setTransform(25.55,-97.85,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_180();
	this.instance_1.setTransform(33.25,-72.8,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_179();
	this.instance_2.setTransform(51.55,1.45,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_178();
	this.instance_3.setTransform(50.05,-18.7,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_177();
	this.instance_4.setTransform(42.3,-40.6,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_176();
	this.instance_5.setTransform(13.1,-140.45,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_175();
	this.instance_6.setTransform(-4.25,-152.2,0.5,0.5);

	this.instance_7 = new lib.Path_2();
	this.instance_7.setTransform(90.95,47.95,0.7702,0.7702,0,0,0,118.5,260.9);
	this.instance_7.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PORTAL2, new cjs.Rectangle(-4.2,-153.1,186.7,402.4), null);


(lib.PORTAL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_174();
	this.instance.setTransform(20.1,32.85,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_173();
	this.instance_1.setTransform(28.5,67.35,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_172();
	this.instance_2.setTransform(51.8,140.15,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_171();
	this.instance_3.setTransform(45.4,131.4,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_170();
	this.instance_4.setTransform(38.35,102.4,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_169();
	this.instance_5.setTransform(6.3,-6.45,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_168();
	this.instance_6.setTransform(-12.25,-32.85,0.5,0.5);

	this.instance_7 = new lib.Path_2();
	this.instance_7.setTransform(91.1,198.65,0.8383,0.8383,0,0,0,118.7,261.1);
	this.instance_7.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PORTAL, new cjs.Rectangle(-12.2,-32.8,202.79999999999998,450.40000000000003), null);


(lib.mp1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Path_8();
	this.instance.setTransform(3035.2,2232.35,1,1,0,0,0,356.2,356.2);
	this.instance.alpha = 0.3008;

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.setTransform(3035.25,2232.4,1,1,0,0,0,649.6,649.6);
	this.instance_1.alpha = 0.3008;

	this.instance_2 = new lib.Path_2_1();
	this.instance_2.setTransform(3035.3,2232.45,1,1,0,0,0,833,833);
	this.instance_2.alpha = 0.3008;

	this.instance_3 = new lib.Path_3();
	this.instance_3.setTransform(3027.3,2232.45,1,1,0,0,0,1113,1113);
	this.instance_3.alpha = 0.3008;

	this.instance_4 = new lib.Path_4();
	this.instance_4.setTransform(1120.95,1112.95,1,1,0,0,0,356.2,356.2);
	this.instance_4.alpha = 0.3008;

	this.instance_5 = new lib.Path_5();
	this.instance_5.setTransform(1121,1113,1,1,0,0,0,649.6,649.6);
	this.instance_5.alpha = 0.3008;

	this.instance_6 = new lib.Path_6();
	this.instance_6.setTransform(1121,1113,1,1,0,0,0,833,833);
	this.instance_6.alpha = 0.3008;

	this.instance_7 = new lib.Path_7();
	this.instance_7.setTransform(1113,1113,1,1,0,0,0,1113,1113);
	this.instance_7.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mp1, new cjs.Rectangle(0,0,4140.3,3345.5), null);


(lib.maintitle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.MAZE_1();
	this.instance.setTransform(1018.7,753.45,1,1,0,0,0,322.8,76);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",17,17,15);

	this.instance_1 = new lib.CachedBmp_152();
	this.instance_1.setTransform(712.4,707.75,0.5,0.5);

	this.instance_2 = new lib.Group();
	this.instance_2.setTransform(982.9,340.35,1,1,0,0,0,393.4,111.4);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",20,20,18);

	this.instance_3 = new lib.Group_1();
	this.instance_3.setTransform(976.8,541.8,1,1,0,0,0,339.5,428.5);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",0,159,255);

	this.instance_4 = new lib.Group_2();
	this.instance_4.setTransform(976.7,1541.45,1,1,0,0,0,339.4,590.8);

	this.instance_5 = new lib.CachedBmp_151();
	this.instance_5.setTransform(367.5,445.8,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_150();
	this.instance_6.setTransform(276.5,354.8,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_149();
	this.instance_7.setTransform(276.55,931.55,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_148();
	this.instance_8.setTransform(417.55,303.45,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_151();
	this.instance_9.setTransform(1373.5,453.8,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_150();
	this.instance_10.setTransform(1282.5,362.8,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_149();
	this.instance_11.setTransform(1282.55,939.55,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_148();
	this.instance_12.setTransform(1423.55,311.45,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_143();
	this.instance_13.setTransform(-119.2,613.25,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_142();
	this.instance_14.setTransform(207.45,-163.15,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_141();
	this.instance_15.setTransform(1503.55,-145.6,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_140();
	this.instance_16.setTransform(1567.75,576.25,0.5,0.5);

	this.instance_17 = new lib.Group_5();
	this.instance_17.setTransform(409.4,1158.25,1,1,0,0,0,257.9,344.8);
	this.instance_17.alpha = 0.1992;

	this.instance_18 = new lib.Group_6();
	this.instance_18.setTransform(1560.15,1171.4,1,1,0,0,0,266.9,346.4);
	this.instance_18.alpha = 0.1992;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.maintitle, new cjs.Rectangle(-119.2,-163.1,2163.5,2497.6), null);


(lib.instruction = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_138();
	this.instance.setTransform(260.05,677.35,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_137();
	this.instance_1.setTransform(358,544.8,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_136();
	this.instance_2.setTransform(111.95,161.9,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_135();
	this.instance_3.setTransform(1611.15,245.95,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_134();
	this.instance_4.setTransform(1542.15,245.95,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_133();
	this.instance_5.setTransform(1572.45,319.05,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_132();
	this.instance_6.setTransform(1617.2,418.95,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_132();
	this.instance_7.setTransform(1500.45,418.95,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_132();
	this.instance_8.setTransform(1558.85,418.95,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_129();
	this.instance_9.setTransform(1453.3,165.3,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_128();
	this.instance_10.setTransform(1693.5,420.35,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_127();
	this.instance_11.setTransform(1455.25,407.6,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_126();
	this.instance_12.setTransform(1671.8,407.6,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_125();
	this.instance_13.setTransform(1497.05,245.55,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_124();
	this.instance_14.setTransform(1539.95,104.45,0.5,0.5);

	this.instance_15 = new lib.Path_9();
	this.instance_15.setTransform(986.9,746.8,1,1,0,0,0,165,271.4);
	this.instance_15.alpha = 0.1992;

	this.instance_16 = new lib.CachedBmp_123();
	this.instance_16.setTransform(108.75,474.95,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_122();
	this.instance_17.setTransform(85,475,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_121();
	this.instance_18.setTransform(1738.7,542.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.instruction, new cjs.Rectangle(85,104.5,1696.2,913.3), null);


(lib.HOMEEND = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(143.2,40.7,0.6882,0.6882,0,0,0,133.6,133.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(51.3,-51.1,183.7,183.79999999999998);


(lib.ending = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path_
	this.instance = new lib.Path();
	this.instance.setTransform(966.1,808.6,1,1,0,0,0,550.8,266.4);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.CachedBmp_8();
	this.instance_1.setTransform(215.3,880.75,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_7();
	this.instance_2.setTransform(180.35,845.8,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_6();
	this.instance_3.setTransform(180.35,1067.3,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_5();
	this.instance_4.setTransform(234.5,826.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Layer_4
	this.instance_5 = new lib.CachedBmp_21();
	this.instance_5.setTransform(1121.8,1039.85,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_20();
	this.instance_6.setTransform(1121.8,1015.55,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_19();
	this.instance_7.setTransform(1024.85,839.8,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_19();
	this.instance_8.setTransform(908.2,839.8,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_17();
	this.instance_9.setTransform(962.1,883.45,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_16();
	this.instance_10.setTransform(1025.9,994.15,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_15();
	this.instance_11.setTransform(885.15,996.7,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_15();
	this.instance_12.setTransform(956.95,996.7,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_13();
	this.instance_13.setTransform(931.1,609.95,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_12();
	this.instance_14.setTransform(824.45,684.75,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_11();
	this.instance_15.setTransform(826.9,982.75,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_10();
	this.instance_16.setTransform(1090.8,982.75,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_9();
	this.instance_17.setTransform(878.3,783.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// _Path__1
	this.instance_18 = new lib.Path_1();
	this.instance_18.setTransform(968.25,769.15,1,1,0,0,0,630.6,304.9);
	this.instance_18.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));

	// Tahniah__Anda_sudah_berjaya_mendapatkan_bateri_untuk_bolt__Sekarang_bolt_dapat_berfungsi_dengan_baik__
	this.instance_19 = new lib.CachedBmp_22();
	this.instance_19.setTransform(163.7,77.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// Layer_7
	this.instance_20 = new lib.CachedBmp_28();
	this.instance_20.setTransform(482.2,366.2,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_27();
	this.instance_21.setTransform(538,348.2,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_26();
	this.instance_22.setTransform(591.95,346.3,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_25();
	this.instance_23.setTransform(434.65,306.6,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_24();
	this.instance_24.setTransform(656.15,306.65,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_23();
	this.instance_25.setTransform(414.95,360.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20}]}).wait(1));

	// Layer_8
	this.instance_26 = new lib.CachedBmp_29();
	this.instance_26.setTransform(195.7,398.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ending, new cjs.Rectangle(163.7,77.8,1594.5,1002), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.clearAllSoundStreams();
		 
		//to enable mouse over feature
		stage.enableMouseOver();
		
		//to decide which component will appear
		this.lostmaze.visible=false;
		this.maze.visible=false;
		this.maze2.visible=false;
		this.mazefail2.visible=false;
		this.restart.visible=false;
		this.gameover.visible=false;
		this.end.visible=false;
		this.portal.visible=false;
		this.portal2.visible=false;
		this.restart2.visible=false;
		this.border2.visible=false;
		this.start.visible=false;
		this.ins.visible=false;
		this.ending.visible=false;
		this.next2.visible=false;
		this.home.visible=false;
		this.border.visible=false;
		this.mp1.visible=false;
		
		
		//to change the instruction this to root
		var root = this;
		
		
		//adding event listener to the next1 button symbol
		//adding function to the button symbol
		//to decide which component will appear after clicking next1 button
		this.next1.addEventListener("click" , startgame);
		
		function startgame (){
			
			root.ins.visible=true;
			root.next2.visible=true;
			root.mt.visible=false;
			root.next1.visible=false;
			
		}
		
		//adding event listener to the next2 button symbol
		//adding function to the button symbol
		//to decide which component will appear after clicking next2 button
		this.next2.addEventListener("click" , startgame2);
		
		function startgame2 (){
			
			root.ins.visible=false;
			root.next2.visible=false;
			root.start.visible=true;
			root.maze.visible=false;
			root.end.visible=false;
			root.maze2.visible=false;
			root.portal2.visible=false;
			root.portal.visible=false;
			root.gameover.visible=false;
			root.restart.visible=false;
			root.mp1.visible=true;
		}
		
		//adding event listener to the start button symbol
		//adding function to the button symbol
		//to decide which component will appear after clicking start button
		this.start.addEventListener("click" , startgame3);
		
		function startgame3 (){
			
			root.maze.visible=true;
			root.portal.visible=true;
			root.border.visible=true;
			root.portal2.visible=false;
		}
		
		//to add function when the mouse cursor over the maze, you will lose the game
		this.maze.addEventListener("mouseover", youfailed);
		
		function youfailed () {
			
			root.restart.visible=true;
		    root.gameover.visible=true;
			root.lostmaze.visible=true;
			root.maze.visible=false;
			root.portal.visible=false
			
		}
		
		//to add function when the mouse cursor over the border, you will lose the game
		this.border.addEventListener("mouseover", youfailed);
		
		function youfailed () {
			
			root.restart.visible=true;
		    root.gameover.visible=true;
			root.lostmaze.visible=true;
			root.maze.visible=false;
			root.portal.visible=false
			root.border.visible=false;
			
		}
		
		//adding event listener to the restart button symbol
		//adding function to the button symbol
		//to decide which component will appear after clicking restart button to restart the game
		this.restart.addEventListener("click", tryagain);
		
		function tryagain () {
			
			root.restart.visible=false;
		    root.gameover.visible=false;
			root.lostmaze.visible=false;
			root.end.visible=false
			root.maze.visible=false;
			
		
		}
		
		//to add function when the mouse cursor over the portal, you will go to the next level maze 
		this.portal.addEventListener("mouseover", nextlevel);
		
		function nextlevel () {
			
			root.maze.visible=false;
			root.maze2.visible=true;
		    root.end.visible=true;
			root.portal2.visible=true;
			root.portal.visible=false;
			root.start.visible=false;
			root.border1.visible=false;
			root.border2.visible=true;
		}
		
		//to add function when the mouse cursor over the maze2, you will lose the game
		this.maze2.addEventListener("mouseover", youfailed2);
		
		function youfailed2 () {
			
			root.restart2.visible=true;
			root.restart.visible=false;
		    root.gameover.visible=true;
			root.mazefail2.visible=true;
			root.maze2.visible=false;
			root.end.visible=false;
			root.portal2.visible=true;
		}
		
		//to add function when the mouse cursor over the border2, you will lose the game
		this.border2.addEventListener("mouseover", youfailed2);
		
		function youfailed2 () {
			
			root.restart2.visible=true;
		    root.gameover.visible=true;
			root.mazefail2.visible=true;
			root.maze2.visible=false;
			root.end.visible=false;
			root.portal2.visible=true;
			root.border2.visible=false;
		}
		
		//adding event listener to the restart2 button symbol
		//adding function to the button symbol
		//to decide which component will appear after clicking restart2 button to restart the game
		this.restart2.addEventListener("click", tryagain2);
		
		function tryagain2 () {
			
			root.restart2.visible=false;
		    root.gameover.visible=false;
			root.mazefail2.visible=false;
			root.end.visible=false;
			root.maze2.visible=false;
		}
		
		//adding event listener to the portal2 button symbol
		//adding function to the button symbol
		//when you click the portal2 button, the second maze will appear
		this.portal2.addEventListener("click" , restart2);
		
		function restart2 (){
			
			root.maze2.visible=true;
			root.end.visible=true;
			root.border2.visible=true;
			
		}
		
		//adding event listener to the end button symbol
		//adding function to the button symbol
		//when you click the end button, the last page will appear
		this.end.addEventListener("click", end);
		
		function end () {
			
			root.ending.visible=true;
			root.home.visible=true;
			root.portal2.visible=false;
			root.portal.visible=false;
			root.border2.visible=false;
			root.border.visible=false;
			root.mp1.visible=false;
			root.maze2.visible=false;
			root.end.visible=false;
		}
		
		//adding event listener to the home button symbol
		//adding function to the button symbol
		//when you click the home button, you will be send back to the first page
		this.home.addEventListener("click", end2);
		
		function end2 () {
			
			root.mt.visible=true;
			root.next1.visible=true;
			root.home.visible=false;
			root.ending.visible=false;
			root.lostmaze.visible=false;
			root.maze.visible=false;
			root.maze2.visible=false;
			root.mazefail2.visible=false;
			root.restart.visible=false;
			root.gameover.visible=false;
			root.end.visible=false;
			root.portal.visible=false;
			root.portal2.visible=false;
			root.restart2.visible=false;
			root.border2.visible=false;
			root.border.visible=false;
			root.start.visible=false;
			root.ins.visible=false;
			root.ending.visible=false;
			root.next2.visible=false;
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// HOME
	this.home = new lib.HOMEEND();
	this.home.name = "home";
	this.home.setTransform(1638.55,885.85);
	new cjs.ButtonHelper(this.home, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.home).wait(1));

	// NEXT2
	this.next2 = new lib.STARTINS();
	this.next2.name = "next2";
	this.next2.setTransform(1804.45,959.5,1,1,0,0,0,85.2,85.2);
	new cjs.ButtonHelper(this.next2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.next2).wait(1));

	// NEXT1
	this.next1 = new lib.STARTMAIN();
	this.next1.name = "next1";
	this.next1.setTransform(969.05,959.5,1,1,0,0,0,85.2,85.2);
	new cjs.ButtonHelper(this.next1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.next1).wait(1));

	// ENDING
	this.ending = new lib.ending();
	this.ending.name = "ending";
	this.ending.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.ending).wait(1));

	// INSTRUCTION
	this.ins = new lib.instruction();
	this.ins.name = "ins";
	this.ins.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.ins).wait(1));

	// TITLE
	this.mt = new lib.maintitle();
	this.mt.name = "mt";
	this.mt.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.mt).wait(1));

	// BORDER2
	this.border2 = new lib.BORDER2();
	this.border2.name = "border2";
	this.border2.setTransform(958.6,540.3,1,1,0,0,0,958.6,540.3);

	this.timeline.addTween(cjs.Tween.get(this.border2).wait(1));

	// BORDER
	this.border = new lib.BORDER();
	this.border.name = "border";
	this.border.setTransform(958.65,540.3,1,1,0,0,0,958.6,540.3);

	this.timeline.addTween(cjs.Tween.get(this.border).wait(1));

	// RESTART2
	this.restart2 = new lib.RESTART2();
	this.restart2.name = "restart2";
	this.restart2.setTransform(971.55,768.7,1.527,1.527,0,0,0,125.7,73.2);
	new cjs.ButtonHelper(this.restart2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.restart2).wait(1));

	// RESTART
	this.restart = new lib.RESTART();
	this.restart.name = "restart";
	this.restart.setTransform(804.35,662.85,1.33,1.33);
	new cjs.ButtonHelper(this.restart, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.restart).wait(1));

	// GAMEOVER
	this.gameover = new lib.GAMEOVER();
	this.gameover.name = "gameover";
	this.gameover.setTransform(966.1,539.8,1,1,0,0,0,502.9,502.9);

	this.timeline.addTween(cjs.Tween.get(this.gameover).wait(1));

	// PORTAL2
	this.portal2 = new lib.PORTAL2();
	this.portal2.name = "portal2";
	this.portal2.setTransform(1613,908.05,1,1,0,0,0,69,134.8);

	this.timeline.addTween(cjs.Tween.get(this.portal2).wait(1));

	// PORTAL
	this.portal = new lib.PORTAL();
	this.portal.name = "portal";
	this.portal.setTransform(1613,173.8,1,1,0,0,0,69,134.8);

	this.timeline.addTween(cjs.Tween.get(this.portal).wait(1));

	// MAZEFAIL2
	this.mazefail2 = new lib.MAZEFAIL2();
	this.mazefail2.name = "mazefail2";
	this.mazefail2.setTransform(962.5,540,1,1,0,0,0,533.5,532);

	this.timeline.addTween(cjs.Tween.get(this.mazefail2).wait(1));

	// MAZE2
	this.maze2 = new lib.MAZE2();
	this.maze2.name = "maze2";
	this.maze2.setTransform(965.5,538,1,1,0,0,0,533.5,532);

	this.timeline.addTween(cjs.Tween.get(this.maze2).wait(1));

	// MAZE1
	this.maze = new lib.MAZE();
	this.maze.name = "maze";
	this.maze.setTransform(964,539.4,1,1,0,0,0,535,533.6);

	this.timeline.addTween(cjs.Tween.get(this.maze).wait(1));

	// LOSTMAZE
	this.lostmaze = new lib.LOSTMAZE();
	this.lostmaze.name = "lostmaze";
	this.lostmaze.setTransform(964,539.4,1,1,0,0,0,535,533.6);

	this.timeline.addTween(cjs.Tween.get(this.lostmaze).wait(1));

	// END
	this.end = new lib.END();
	this.end.name = "end";
	this.end.setTransform(297.55,162.8,1,1,0,0,0,85.2,85.2);
	new cjs.ButtonHelper(this.end, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.end).wait(1));

	// START
	this.start = new lib.START();
	this.start.name = "start";
	this.start.setTransform(297.6,905.65,1,1,0,0,0,85.2,85.2);
	new cjs.ButtonHelper(this.start, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.start).wait(1));

	// mazepattern
	this.mp1 = new lib.mp1();
	this.mp1.name = "mp1";
	this.mp1.setTransform(939.75,519.5,1,1,0,0,0,2070.2,1672.7);

	this.timeline.addTween(cjs.Tween.get(this.mp1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-170.5,-613.2,3180.4,2947.7);
// library properties:
lib.properties = {
	id: '500ED32F9D8CE049BBC1FDCF119B6D05',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#000033",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_166.png?1706627638865", id:"CachedBmp_166"},
		{src:"images/CachedBmp_167.png?1706627638865", id:"CachedBmp_167"},
		{src:"images/CachedBmp_137.png?1706627638865", id:"CachedBmp_137"},
		{src:"images/CachedBmp_138.png?1706627638865", id:"CachedBmp_138"},
		{src:"images/CachedBmp_136.png?1706627638865", id:"CachedBmp_136"},
		{src:"images/CachedBmp_155.png?1706627638865", id:"CachedBmp_155"},
		{src:"images/CachedBmp_162.png?1706627638865", id:"CachedBmp_162"},
		{src:"images/CachedBmp_158.png?1706627638865", id:"CachedBmp_158"},
		{src:"images/CachedBmp_153.png?1706627638865", id:"CachedBmp_153"},
		{src:"images/CachedBmp_123.png?1706627638865", id:"CachedBmp_123"},
		{src:"images/CachedBmp_22.png?1706627638865", id:"CachedBmp_22"},
		{src:"images/CachedBmp_163.png?1706627638865", id:"CachedBmp_163"},
		{src:"images/CachedBmp_2.png?1706627638865", id:"CachedBmp_2"},
		{src:"images/CachedBmp_164.png?1706627638865", id:"CachedBmp_164"},
		{src:"images/CachedBmp_160.png?1706627638865", id:"CachedBmp_160"},
		{src:"images/index_atlas_1.png?1706627638805", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png?1706627638805", id:"index_atlas_2"},
		{src:"images/index_atlas_3.png?1706627638805", id:"index_atlas_3"},
		{src:"images/index_atlas_4.png?1706627638805", id:"index_atlas_4"},
		{src:"images/index_atlas_5.png?1706627638805", id:"index_atlas_5"},
		{src:"images/index_atlas_6.png?1706627638805", id:"index_atlas_6"},
		{src:"images/index_atlas_7.png?1706627638805", id:"index_atlas_7"},
		{src:"images/index_atlas_8.png?1706627638805", id:"index_atlas_8"},
		{src:"images/index_atlas_9.png?1706627638806", id:"index_atlas_9"},
		{src:"images/index_atlas_10.png?1706627638806", id:"index_atlas_10"},
		{src:"images/index_atlas_11.png?1706627638806", id:"index_atlas_11"},
		{src:"images/index_atlas_12.png?1706627638806", id:"index_atlas_12"},
		{src:"images/index_atlas_13.png?1706627638807", id:"index_atlas_13"},
		{src:"images/index_atlas_14.png?1706627638808", id:"index_atlas_14"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['500ED32F9D8CE049BBC1FDCF119B6D05'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;