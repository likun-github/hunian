<template>
	<view class="daily1">
		<view class="container1">
			<view class="content1" @tap="gotoPlayer1">
				<image style="width: 100%;height: 100%;" src="/static/h1.jpg"></image>
				<view class="conten2">晨起</view>
			</view>
			<view class="content1" @tap="gotoPlayer2">
				<image style="width: 100%;height: 100%;" src="/static/h2.jpg"></image>
				<view class="conten2">专注</view>
			</view>
			<view class="content1" @tap="gotoPlayer3">
				<image style="width: 100%;height: 100%;" src="/static/h3.jpg"></image>
				<view class="conten2">午休</view>
				
			</view>
			<view class="content1" @tap="gotoPlayer4">
				<image style="width: 100%;height: 100%;" src="/static/h4.jpg"></image>
				<view class="conten2">晚眠</view>
			</view>
		</view>	
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
		computed:{
			...mapState(["music","dailymusic","firsttime"])
		},
		onLoad:function(){

			
		},
		methods:{
			gotoPlayer1:function(){
				if(this.firsttime==true){
				
					uni.navigateTo({
						url: '/pages/player/player',
					});
					}
				this.selectMusic(this.dailymusic[0]);
			},	
			gotoPlayer2:function(){
				if(this.firsttime==true){
				
					uni.navigateTo({
						url: '/pages/player/player',
					});
					}
				this.selectMusic(this.dailymusic[1]);
			},	
			gotoPlayer3:function(){
				if(this.firsttime==true){
				
					uni.navigateTo({
						url: '/pages/player/player',
					});
					}
				this.selectMusic(this.dailymusic[2]);
			},	
			gotoPlayer4:function(){
				if(this.firsttime==true){
				
					uni.navigateTo({
						url: '/pages/player/player',
					});
				}
				this.selectMusic(this.dailymusic[3]);
			},	
			...mapMutations(["changePlay",'selectMusic'])
		}
	}
</script>
<style>
	.daily1{
		width: 750upx;
		height: 175upx;
		position: relative;
		margin-top: 620upx;
		display: flex;
	}
	.container1{
		display: flex;
		flex: 1;
		width: 25%;
		height: 160upx;
		position: relative;
	}
	.content1{
		margin-left:40upx;
		width:140upx;
		height: 140upx;
	}
	.conten2{
		font-size: 24upx;
		color: #bbb;
		margin-left: 40upx;
	}
	
	
	
</style>