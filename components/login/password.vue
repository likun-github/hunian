<template>
	<view class="login_form">
		<view class="login_form_top">重置密码</view>
		<input placeholder="账号" v-model="account" placeholder-style="color:#ccc"/>
		<input placeholder="密码" password v-model="code" placeholder-style="color:#ccc"/>
		<button type="primary" @tap="login"> 重置密码 </button>
		<view class="login_form_bottom" >
			<text @tap="changeStatus">已有账号？去登陆</text>
		</view>
	</view>
</template>
<script>
	export default{
		data:function(){
			return {
				account:'',
				code:''
			}
		},
		methods: {
			login: function (e) {
				console.log(this.account)
			},
			changeStatus:function(){
				this.$emit('changeStatus',1);
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