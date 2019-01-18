<template>
	<view class="setting">
		<image src="../../static/med.jpg" style="width: 750upx;height: 100%;position: absolute;"></image>
		<view class="back-icon9" @tap="back">
			<image src="/static/arrow-left.png" style="width: 100%; height: 100%;"></image>
		</view>
		<view class="setting_top">
			<text>个人信息</text>
		</view>
		<image src="/static/flower.png" class="change" > </image>
		<view class="changeword">
			<text>1</text>
		</view>
		<image src="/static/long.png" class="middle"></image>
		<view class="middleword">您的等级</view>
		<view class="container">
			<view class="content">
				<image src="/static/icon1.png"></image>
				<view class="content2">持续天数 </view>
				<view class="content3">0天</view>
			</view>
			<view class="content">
				<image src="/static/icon3.png"></image>
				<view class="content2">总课程数</view>
				<view class="content3">0天</view>
				
			</view>
			<view class="content">
				<image src="/static/icon2.png"></image>
				<view class="content2">冥想时长</view>
				<view class="content3">0天</view>
			</view>
			<image class="rectangle" src="/static/rectangle.png" @tap="loginOut"></image>
			<view class="recword" @tap="loginOut">退 出 登 陆</view>
		</view>
		
		
		
	</view>
</template>
<script>
	export default{
		data:function(){
			return {
				
			}
		},
		methods:{
			back:function(){
			uni.navigateBack({
				delta: 1
			});
			},
			loginOut:function(){
				uni.showModal({
					title: '退出登录？',
					content: '您确定要退出当前账号吗？',
					success: function (res) {
						if (res.confirm) {
							console.log('用户点击确定');
							uni.removeStorageSync('autoLogin');
							uni.redirectTo({
								url: '/pages/login/login'
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		}
	}
</script>
<style>
	.setting{
		width: 100%;
		height: 100%;
		position: absolute;
	}
	.back-icon9 {
		position: absolute;
		height: 80upx;
		width: 80upx;
        left:40upx;
        top:50upx;
	}
	 .change{     
	    width:150upx;     
	    height: 150upx; 
		margin-left: 300upx;
		margin-top: 100upx;
		position: relative;
		background-repeat: no-repeat;    
	    border-radius:75upx;     
	    -webkit-animation:run 6s linear 0s infinite;     
	} 
	.changeword{
		
		margin-left: 364upx;
		position: absolute;
		font-size: 40upx;
		font-weight: 400;
		margin-top:-110upx;
		opacity: 0.8;
		color: #FFFFFF;
		
	}
	.middle{
		position: relative;
		width: 350upx;
		height: 75upx;
		margin-top: -50upx;
		margin-left: 200upx;
	}
	 .middleword{
		 position: absolute;
		 font-size: 30upx;
		 font-family: serif;
		 margin-top: -55upx;
		 position: absolute;
		 margin-left: 315upx;
		 opacity: 0.8;
		 color: #FFFFFF;
		
		
	 }  
	@-webkit-keyframes run{     
	    from{     
	        -webkit-transform:rotate(0deg);     
	    }     
	    to{     
	        -webkit-transform:rotate(360deg);     
	    }     
	}    
	 
	.container{
		position: relative;
		width: 750upx;
		height: 600upx;
		margin-top: 50upx;
		display: flex;
	}
	.content{
		flex: 1;
		position: relative;
		width: 250upx;
		height: 100%;
		margin-left: 0upx;
		text-align: center;
		
		
	}
	.content image{
		position: relative;
		width: 60upx;
		height: 60upx;
		margin-left: 0upx;
		
	}
	.content2{
		position: absolute;
		width: 100%;
		
		font-size: 30upx;
		font-family: serif;
		margin-top: 20upx;
		position: absolute;
		opacity: 0.8;
		color: #FFFFFF;
	}
	.content3{
		position:absolute;
		width: 100%;
		
		font-size: 30upx;
		font-family: serif;
		margin-top: 60upx;
		position: absolute;
		opacity: 0.8;
		color: #FFFFFF;
	}
	.rectangle{
		position: absolute;
		width: 650upx;
		height:80upx ;
		margin-top: 200upx;
		margin-left: 50upx;
	}
	.recword{
		position:absolute;
		width: 100%;

		font-size: 30upx;
		font-family: serif;
		margin-top: 220upx;
		position: absolute;
		opacity: 0.8;
		color: #FFFFFF;
		text-align: center;
	}
	
</style>