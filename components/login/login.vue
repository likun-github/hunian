<template>
	<view class="login_form">
		<view class="login_form_top">登录</view>
		<input placeholder="账号" v-model="account" placeholder-style="color:#ccc"/>
		<input placeholder="密码" password v-model="password" placeholder-style="color:#ccc"/>
		<button type="primary" @tap="login"> 登录 </button>
		<view class="login_form_bottom" >
			<text @tap="changeStatus(2)">注册账号</text>
			<text @tap="changeStatus(3)">忘记密码？</text>
		</view>
	</view>
</template>
<script>
	export default{
		data:function(){
			return {
				account:'',
				password:''
			}
		},
		mounted:function(){
			try {
				const account = uni.getStorageSync('account');
				const password = uni.getStorageSync('password');
				if (account) {
					this.account=account;
					if (password) {
						this.password=password;
					}
				}
			} catch (e) {
				// error
			}
		},
		methods: {
			login: function (e) {
				if(this.account==''||this.password==''){
					uni.showToast({
						title: '账号或密码不能为空',
						duration: 2000,
						icon:'none'
					});
					return;
				}
				
				uni.request({
					url:'https://xiaoyibang.top/calm/login',
					data:{
						username:this.account,
						password:this.password,
					},
					success: (res) => {
						console.log(res.data.success)
						if(res.data.success){
							try {
								uni.setStorageSync('account', this.account);
								uni.setStorageSync('password', this.password);
								uni.setStorageSync('autoLogin', true);
								uni.redirectTo({
									url: '/pages/index/index'
								});
							} catch (e) {
								uni.redirectTo({
									url: '/pages/index/index'
								});
							}
							}
						else{
							uni.showToast({
								title: '密码错误',
								duration: 2000,
								icon:'none'
							});
							}
						},
					fail: () => {
						uni.showToast({
							title: '网络故障',
							duration: 2000,
							icon:'none'
						});	
						uni.redirectTo({
							url: '/pages/index/index'
						});
					}
				});
				
			},
			changeStatus:function(index){
				this.$emit('changeStatus',index);
			}
		}
	}
</script>

<style>
	.login_form{
		width: 650upx;
		position: absolute;
		top: 400upx;
		left: 50upx;
	}
	.login_form .login_form_top{
		color: #FFFFFF;
		font-size: 50upx;
		text-align: center;
	}
	.login_form .login_form_bottom{
		color: #FFFFFF;
		font-size: 30upx;
		text-align: center;
		text-decoration: underline;
		display: flex;
		justify-content: space-between;
		margin-top: 30upx;
	}
	input{
		margin: 30upx 0 ;
		background: #000;
		opacity: 0.5;
		height: 80upx;
		border-radius: 10upx;
		color: #fff;
		padding: 0 30upx;
	}
</style>