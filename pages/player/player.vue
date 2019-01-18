<template>
	<view class="player">
		<image :src="music.coverImgUrl" mode="aspectFill" style="width: 750upx; height: 100%; position: absolute;"></image>
		<image :src="music.authorphoto" mode="scaleToFill" class="photo"></image>
		<view class="status_bar"></view>
		<view class="back-icon"  @tap="back">
			<text style="font-size: 50upx;font-family: 'iconfont';color: #fff;" >&#xe674;</text>
		</view>
	
		<view class="content">
			<view class="title">{{music.name}}</view>
			<view class="about">
				<view class="desc">{{music.introduction}}</view>
			</view>
			<view class="music_about">
				<view class="music_top">朗诵</view>
				<view class="music_bottom">{{music.author}}</view>
			</view>
			<view class="music_about">
				<view class="music_top">内容创作</view>
				<view class="music_bottom">{{music.narrator}}</view>
			</view>
		</view>
		
		<!-- <view class="heart" :style="{background:love?'#FF0066':'#BBBBBB'}">
			<text v-if="love" style='font-size: 40upx;color: #fff;font-family: iconfont;' @tap.stop="changeLove">&#xe633;</text>
			<text v-else style='font-size: 40upx;color: #fff;font-family: iconfont;' @tap.stop="changeLove">&#xe661;</text>
		</view> -->
		<view class="control">
			<text style="font-size: 50upx;font-family: 'iconfont';color: #fff;">&#xe659;</text>
			<!-- <text style="font-size: 50upx;font-family: 'iconfont';color: #fff;" @tap="musicback">&#xe603;</text> -->
			<image src="../../static/forward15.png" @tap="musicback" style="width: 65upx; height: 65upx;"></image>
			<text v-if="music.play" style='font-size: 60upx;color: #fff;font-family: iconfont;' @tap.stop="changePlay">&#xe633;</text>
			<text v-else style='font-size: 60upx;color: #fff;font-family: iconfont;' @tap.stop="changePlay">&#xe6e1;</text>
			<!-- <text style="font-size: 50upx;font-family: 'iconfont';color: #fff;" @tap="musicforward">&#xe617;</text> -->
			<image src="../../static/go15.png"  @tap="musicforward" style="width: 65upx; height: 65upx;"></image>
			<text style="font-size: 50upx;font-family: 'iconfont';color: #fff;" @tap="changeStop">&#xe630;</text>
		</view>
		<view class="progress">
			<slider @change="changeposition" block-size=5 min=0 max=100 :value="percentage"/>
			<view class="time">
				<text>{{minute1}}:{{second1}}</text>
				<text>{{music.minute}}:{{music.second}}</text>
			</view>
		</view>
	</view>
</template>
<script>
	var self;
 	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			self=this
			return {
				musicposition:0,
				love:false,
				play_icon:{
					nodes:[{name: 'div',children: [{type: 'text',text: '&#xe6e1;'}]}],
					select_nodes:[{name: 'div',children: [{type: 'text',text: '&#xe633;'}]}]
				},
				heart_icon:{
					nodes:[{name: 'div',children: [{type: 'text',text: '&#xe661;'}]}],
					select_nodes:[{name: 'div',children: [{type: 'text',text: '&#xe6bd;'}]}]
				},
			}
		},
		computed:{
			...mapState(["music","percentage"]),
			...mapState({
				minute1(state){
					var minute1;
					minute1=Math.floor(state.music.currentTime/60);
					return minute1;
				}
			}),
			...mapState({
				second1(state){
					var second1;
					second1=Math.floor(state.music.currentTime-60*Math.floor(state.music.currentTime/60));
					return second1;
				}
			}),
		},
		onLoad:function(){
			//console.log(this.currentmusic);
			
		},
		onShow:function(){
		
		},
		mounted:function(){
			
		},
		methods: {
		
			changeposition:function(e){
				console.log(e.target.value);
				this.musicposition=e.target.value/100*this.music.duration;
				
				this.seek(this.musicposition);
			},
			back:function(){
				uni.navigateBack({
					delta: 1
				});
			},
			changeLove:function(){
				this.love=!this.love;
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
			...mapMutations(["changePlay","changeStop","seek","musicback","musicforward"])
		},
	}
</script>
<style>
	.player{
		background: #336699;
		height: 100%;
	}
		.back-icon{
			position: absolute;
			height: 60upx;
			width: 60upx;
			padding:30upx;
			top:20upx;
		}
	.download{
		position: absolute;
		height: 50upx;
		padding:30upx;
		margin-left: 600upx;
	}
	.photo{	
		width: 150upx;
		height: 150upx;
		margin-left: 300upx;
		margin-top: 200upx;
		position: absolute;
		border-radius: 75upx;
		overflow: hidden;
		margin-bottom: 20upx;
	}
	.content{
		position: absolute;
		width: 100%;
		height: 500upx;
		margin-top: 400upx;
		margin-left: 0upx;
	}
	.about{
		margin-top:50upx;
		position: relative;
		width: 500upx;
		margin-left:125upx ;
		margin-bottom: 70upx;
	}
	.music_about{
		display: inline-block;
		position: relative;
		width: 50%;
		margin-left: 0upx;
		margin-top: 50upx;
	}
	.music_top{
		color: #fff;
		text-align: center;
		font-size: 30upx;
		font-family: serif;
		position: relative;
		opacity:0.8;
	}
	.music_bottom{
		color: #fff;
		text-align: center;
		font-size: 40upx;
		margin-top: 50upx;
		position: relative;
	}
	.title{
		color: #fff;
		text-align: center;
		font-size: 40upx;
		position: relative;
	}
	.desc{
		color: #fff;
		text-align: center;
		font-size: 30upx;
		margin-top: 50upx;
		position: relative;
	}
	.heart{
		width: 90upx;
		height: 90upx;
		background: #BBBBBB;
		border-radius: 45upx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 300upx;
		left: 330upx;
	}
	.heart image{
		width: 40upx;
		height: 40upx;
	}
	.control{
		display: flex;
		align-items: center;
		height: 100upx;
		width: 750upx;
		justify-content: space-around;
		position: fixed;
		bottom: 150upx;
	}
	.control image{
		width: 40upx;
		height: 40upx;
	}
	.progress{
		width: 700upx;
		position: fixed;
		bottom: 30upx;
		left: 25upx;
	}
	.time{
		display: flex;
		justify-content: space-between;
		color: #FFFFFF;
		font-size: 24upx;
		padding: 0 30upx;
		margin-top: 20upx;
	}
</style>