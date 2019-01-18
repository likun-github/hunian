<template>
   <view class="more">
   	<image src="../../static/med.jpg" style="width: 750upx;height: 100%;position: absolute;"></image>
		<view class="title1">
			<!-- <image src="../../static/top.jpg"></image> -->
			<!-- <view style="padding: 10upx;"></view> -->
			<text>安睡</text>
		</view>
		<!-- <view class="detail">舒缓睡前故事，帮助你进入一个深而自然的睡眠。</view> -->
		<scroll-view class="scroll-view_H" scroll-x style="width: 100%" scroll-with-animation>
			<!-- <image src="../../static/top.jpg" style="width: 120%;height: 100%;position: absolute;"></image> -->
			<view class="title_wrap">
				<view :class="[item==select_title ? 'title_item_select3' : 'title_item_unselect','title_item']" v-for="(item,index) in titles" :key="index"  @tap="selectTitle(item)">
					<text>{{item}}</text>
				</view>
			</view>
        </scroll-view>
		<scroll-view scroll-y class="story_wrap">
            <view v-for="(item,index) in sleepList" :key="index" class="story_item" @tap="goplayer(item)">
            	<image :src="item.picture" mode="scaleToFill" style="width: 100%; height: 100%; background-color: #eeeeee;"></image>
				<view class="story_author"><text>{{item.name}}</text></view>
				<image v-if="lockedshow==true"    class="story_new" src="/static/locked.png"></image>
				<view class="story_time">
					
					<text style="font-size: 30upx;font-family: 'iconfont';color: #fff;">&#xe6e1;</text>
					<text style="font-size: 30upx;">{{item.minute}}:{{item.second}}</text>
				</view>
            </view>
        </scroll-view>
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
				lockedshow:true,
				select_title:'睡前故事',
				titles:['睡前故事','晨起','午休','晚眠'],
				article:[]
			}
		},
		computed:{
			...mapState({
				sleepList(state){
					var list=[];
					for(let i in state.sleepList){
						if (this.select_title==state.sleepList[i].category) {
						list.push(state.sleepList[i]);
						}
							
						}
					return list;
				}
			}),			
		},
		onShow:function(){
			console.log('页面启动');
		},
		methods: {
			selectTitle:function(name){
				this.select_title=name;
				if(name!='睡前故事'){
					this.lockedshow=false;
					}
			},
			goplayer:function(item){
					
				if(this.lockedshow==false){
									this.selectMusic(item);
									uni.navigateTo({
										url: '/pages/player/player',
									});
				}
				else{
					uni.showToast({
						title: '更多VIP课程敬请期待',
						duration: 2000,
						icon:'none'
					});
				}
			},
			...mapMutations(['selectMusic'])
		},
	}
</script>
<style>
	.more{
		width: 750upx;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	.title1{
		color: #FFFFFF;
		text-align: center;
		width: 750upx;
		height: 60upx;
		line-height: 60upx;
		font-size: 36upx;
		top:30upx;
		margin: 20upx 0;
		position: relative;
	}

	.detail{
		margin: 40upx;
		color: #fff;
		text-align: center;
		font-size: 30upx;
	}
	.scroll-view_H{
		overflow: hidden;
		margin-bottom: 20upx;
	}
	.title_wrap{
		position: relative;
		width: 140%;
		height: 100upx;
	}
	.title_item{
		display: inline-block;
		height: 60upx;
		line-height: 60upx;
		padding:0 30upx;
		border-radius: 30upx;
		color: #fff;
		margin: 20upx;
		font-size: 32upx;
		
	}
	.title_item_unselect{
		background: rgba(0,0,0,0);
	}
	.title_item_select3{
		background: linear-gradient(left,#FCBABA 0%,#F2EFEF 100%);
	}
	.story_wrap{
		height: 1100upx;
		display: flex;
		flex-wrap: wrap;
	}
	.story_item{
		display: inline-block;
		width: 330upx;
		height: 400upx;
		margin-left: 30upx;
		margin-bottom: 25upx;
		position: relative;
		border-radius: 40upx;
		overflow: hidden;
	}
	.story_item .story_author{
		position: absolute;
		bottom: 80upx;
		left: 0;
		color: #fff;
		font-size:22upx;
		text-align: center;
		width: 300upx;
	}
	.story_item .story_time{
		position: absolute;
		bottom: 30upx;
		left: 0;
		color: #fff;
		font-size:20upx;
		text-align: center;
		width: 300upx;
		line-height: 30upx;
		height: 30upx;
	}
	.story_item .story_new{
		position: absolute;
		top:30upx;
		right: 30upx;
		width: 30upx;
		height: 50upx;
	}
</style>