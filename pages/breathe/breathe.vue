<template>
	<view class="more">
		<image :src="currentpicture" style="width: 750upx;height: 100%;position: absolute;filter: blur(50upx);"></image>
		<view class="back-icon" @tap="back">
			<image src="/static/arrow-left.png" style="width: 100%; height: 100%;"></image>
		</view>
		<view style="position: absolute; margin-top: 100upx;margin-left: 350upx;color:#FFFFFF ;">{{minute}}:{{second}}</view>
		<image src="/static/circle.png" mode="scaleToFill" class="lopp"></image>
		<view class="textsize"><text>{{word}}</text></view>
	</view>
</template>

<script>
	const breatheaudio = uni.createInnerAudioContext();
	var self;
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			self = this
			return {
				word: '吸气',
				minute: 0,
				second: 0,
				timer: null,
				list: []
			}
		},
		
		onLoad() {
			//首先将实例指针保存到全局变量 self 方便在异步请求中访问实例本身

		},
		onShow: function() {
			breatheaudio.src='/static/breathe.mp3';
			breatheaudio.play();
			var i = 0;
			console.log('定时器开启 i=');
			console.log(i);
			var myDate=new Date();
			var oldminute = myDate.getMinutes(); 
			var oldsecond = myDate.getSeconds();
			self.timer = setInterval(function() {
				var newDate= new Date();
				var newminute = newDate.getMinutes(); 
				var newsecond = newDate.getSeconds();
				if(newminute>=oldminute){
					i=60*newminute+newsecond-60*oldminute-oldsecond;
					console.log('i='+i);
				}
				else{
					oldminute=oldminute+60;
					i=60*newminute+newsecond-60*oldminute-oldsecond;
					console.log('i='+i);
				}
				if(breatheaudio.currentTime>=10){
					breatheaudio.seek(0);
				}
				self.minute = Math.floor(i / 60);
				self.second = Math.floor(i - self.minute * 60);
				var record = self.second % 10;
				if (record <= 3) {
					self.word = '吸气';

				}
				if (record > 3 && record < 7) {
					self.word = '屏息';
				}
				if (record >= 7) {
					self.word = '呼气';
				}
			}, 50);

		},
		onUnload: function() {
			console.log('定时器关闭');
			breatheaudio.stop();
			if (self.timer) {
				clearInterval(self.timer);

			}
		},
		computed: {
			...mapState(["currentpicture"]),
		},
		methods: {
			back: function() {
				// 				uni.redirectTo({
				// 					url: '/pages/index/index'
				// 				});
				// 				uni.navigateTo({
				// 					url: '/pages/index/index'
				// 				});
				uni.navigateBack({
					delta: 1
				});
			},
		},
	}
</script>

<style>
	.more {
		width: 750upx;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}

	.back-icon {
		position: absolute;
		height: 75upx;
		width: 75upx;
		margin-top: 30upx;
		margin-left: 30upx;
	}

	@keyframes circlechangge {
		0% {
			-webkit-transform: scale(0.6);
		}

		40%,
		70% {
			-webkit-transform: scale(1);
		}

		100% {
			-webkit-transform: scale(0.6);
		}
	}

	.lopp {

		width: 700upx;
		height: 700upx;
		margin-left: 25upx;
		/*move left 100px*/
		margin-top: 300upx;
		border-radius: 350upx;
		position: absolute;
		animation: circlechangge 10s infinite alternate;
	}

	@keyframes fontchanghe {
		0% {
			-webkit-transform: scale(0.6);
		}

		33%,
		66% {
			-webkit-transform: scale(1);
		}

		100% {
			-webkit-transform: scale(0.6);
		}

	}

	.textsize {
		width: 100upx;
		height: 50upx;
		margin-left: 325upx;
		/*move to left 125px*/
		margin-top: 625upx;
		font-size: 125%;
		text-align: center;
		font-family: serif;
		color: #FFFFFF;
		position: absolute;
		animation: fontchanghe 10s infinite alternate;
	}
</style>
