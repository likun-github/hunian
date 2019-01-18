<template>
	<view  class="class">
		<image src="../../static/expect.jpg" style="width: 750upx;height: 100%;position: absolute;"></image>
		<view class="back-icon"  @tap="back">
			<text style="font-size: 50upx;font-family: 'iconfont';color: #fff;"  @tap="back">&#xe674;</text>
		</view>
		<view class="sets"> 
		<text class="data">{{zero}}{{mydate}}</text>
		<text class="month">{{mymonth}}月  {{myyear}}</text>
		<text class="te1">丘吉尔说过，</text>
		<text class="te1">“计划是无用的，规划是无价的。”</text>
		<text class="te">而我们的大师课程正在规划中... ...</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mymonth:[],
				mydate:[],
				myyear:[],
				zero:[]
			}
		},
	onLoad() {
		var md;
		var Date1=new Date();
		this.myyear=Date1.getFullYear();
		this.mymonth=Date1.getMonth()+1;
		this.mydate=Date1.getDate();
		md=this.mydate;
		if(md<10){
			this.zero=0;
		}
		else{
			this.zero=Math.floor(md/10);
			this.mydate=md%10;
		}
	},
		methods:{
			back:function(){
				uni.navigateBack({
						delta: 1
					});
			},
		}
	}
</script>

<style>
	.sets{
		color: #fff;
		position: absolute;
		bottom: 100upx;
		left: 50upx;
		margin: 10upx 0;
		display: flex;
		flex-direction: column;
		font-weight: 200;
		
	}
	.data{
		font-size: 70upx;
		color: #fff;
	}
	.month{
		font-size: 30upx;
		color: #fff;
		margin-top:10upx;
	}
	.class{
		width: 750upx;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	.te1{
		color: #fff;
		font-size: 30upx;
		font-weight: 300;
		margin-top: 20upx;
	}
	.te{
		color: #fff;
		font-size: 30upx;
		margin: 30upx 0;
		font-weight: 300;
	}
.back-icon{
		position: absolute;
		height: 60upx;
		width: 60upx;
		padding:30upx;
		top:20upx;
	}
	
</style>
