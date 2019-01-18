<template>
    <view class="audio_card" @tap="gotoPlayer">
		<image :src="music.coverImgUrl" class="poster"></image>
		<view class="name">
			<view><text style="font-size: 30upx;">{{music.name}}</text></view>
			<view><text style="font-size: 20upx;">{{music.author}}</text></view>
		</view>
		<view class="progress">
			<view><text style="font-size: 24upx;">{{music.minute}}:{{music.second}}</text></view>
			<progress :percent="music.currentTime/music.duration*100" color="white" activeColor="#3399FF" stroke-width="2"/>
		</view>
		<text v-if="music.play" style='font-size: 50upx;font-family: iconfont;margin-left: 30upx;' @tap.stop="changePlay">&#xe633;</text>
		<text v-else style='font-size: 50upx;font-family: iconfont;margin-left: 30upx;' @tap.stop="changePlay">&#xe6e1;</text>
    </view>
</template>

<script>
	import {
        mapState,
        mapMutations
    } from 'vuex';
	export default {
		data(){
			return{
			}
		},
		computed: {
            ...mapState(["music","currentmusic"])
        },
		methods: {
			timeupdate:function(detail){
				console.log(detail)
			},
			gotoPlayer:function(){
				this.selectMusic(this.music);
				console.log('audio');
				console.log(this.music);
				uni.navigateTo({
					url: '/pages/player/player'
				});
			},
			formatTime:function(time) {
				if (typeof time !== 'number' || time < 0) {
					return time
				}
				var hour = parseInt(time / 3600)
				time = time % 3600
				var minute = parseInt(time / 60)
				time = time % 60
				var second = time
				return ([hour, minute, second]).map(function (n) {
					n = n.toString()
					return n[1] ? n : '0' + n
				}).join(':')
			},
			...mapMutations(['changePlay','selectMusic'])
		}
	}
</script>
<style>
	.audio_card{
		position: fixed;
		bottom: 190upx;
		left: 25upx;
		width: 690upx;
		height: 120upx;
		border: 1upx solid #FFFFFF;
		border-radius: 60upx;
		background: rgba(0, 0, 0,0.5);
		overflow: hidden;
		display: flex;
		align-items: center;
		color: #fff;
		
	}
	.poster{
		width: 80upx;
		height: 80upx;
		margin-left: 20upx;
		border-radius: 40upx;
	}
	.name{
		margin-left: 20upx;
		width: 380upx;
	}
	.name view{
		line-height: 34upx;
	}
	.progress{
		width: 90upx;
	}
	.progress view{
		text-align: center;
	}
	.progress .uni-progress{
		padding: 10upx 0;
	}
	.progress .uni-progress-bar{
		height: 3upx;
	}
	.play_btn{
		width: 50upx;
		height: 50upx;
		margin-left: 30upx;
	}
</style>