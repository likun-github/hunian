<template>
	<view class="more" >
		<image :src="currentpicture" style="width: 750upx;height: 100%;position: absolute;filter: blur(15upx);"></image>
		<view v-show="status=='more'" style="margin-top: 250upx;">
			<view class="more_item" >
				<view class="more_icon">
					<!-- <text style="font-size: 50upx;font-family: 'iconfont';color: #fff;">&#xe671;</text> -->
					<image src="../../static/course.png"  style="width: 100%; height:100%;"></image>
				</view>
				<view class="more_name" @tap="class1"><text>大师课程</text></view>
				<text style="font-size: 50upx;font-family: 'iconfont';color: #fff;">&#xe60a;</text>
			</view>
			<view class="more_item" @tap="breathe">
				<view class="more_icon">
					<!-- <text style="font-size: 50upx;font-family: 'iconfont';color: #fff;">&#xe671;</text> -->
					<image src="../../static/breathe.png"  style="width: 100%; height:100%;"></image>
				</view>
				<view class="more_name"><text>呼吸</text></view>
				<text style="font-size: 50upx;font-family: 'iconfont';color: #fff;">&#xe60a;</text>
			</view>
			<view class="more_item" @tap="profile">
				<view class="more_icon">
					<!-- <text style="font-size: 50upx;font-family: 'iconfont';color: #fff;">&#xe606;</text> -->
					<image src="../../static/information.png"  style="width: 100%; height:100%;"></image>
				</view>
				<view class="more_name"><text>个人信息</text></view>
				<text style="font-size: 50upx;font-family: 'iconfont';color: #fff;">&#xe60a;</text>
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
				justtry:"/static/slider02.jpg",
				status:'more',
				mores:[

				]
			}
		},
		computed:{
			...mapState(["currentpicture"]),
		},
		
		methods: {
			back:function(){
				this.status="more";
			},
			set:function(name){
				this.status=name;
			},
			breathe:function(){
				this.changepause();
				uni.navigateTo({
					url: '/pages/breathe/breathe',
					
				});
			},
			profile:function(){
				uni.navigateTo({
					url: '/pages/profile/profile',
					
				});
			},
			class1:function(){
				uni.navigateTo({
					url: '/pages/class/class',
					
				});
			},
			...mapMutations(["changepause"]),
		},
		components:{},
		
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
	.more_item{
		position: relative;
		margin-top: 30upx;
		margin-left: 30upx;
		display: flex;
		align-items: center;
		width: 690upx;
		height: 150upx;
		border-bottom: 1upx solid #fff;
	}
	.more_icon{
		position: relative;
		width: 100upx;
		height: 100upx;
	}
	.more_name{
		position: relative;
		color: #FFFFFF;
		flex: 1;
		margin-left: 30upx;
		font-size: 40upx;
	}
</style>