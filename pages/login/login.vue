<template>
	<view class="login">
		<image v-if="status==0" src="../../static/med.jpg" class="login_pic"></image>
		<image v-else src="../../static/med.jpg" class="login_bg"></image>
		<Login v-if="status==1" @changeStatus="changeStatus"></Login>
		<Register v-if="status==2" @changeStatus="changeStatus"></Register>
		<Password v-if="status==3" @changeStatus="changeStatus"></Password>
		
		
	</view>
</template>


<script>
	import Login from '@/components/login/login.vue';
	import Register from '@/components/login/register.vue';
	import Password from '@/components/login/password.vue';
	
	
	export default{
		data:function(){
			return {
				status:1
			}
		},
		onLoad:function(){
			const account = uni.getStorageSync('account');
			const password = uni.getStorageSync('password');
			const autoLogin = uni.getStorageSync('autoLogin');
			if (account&&password&&autoLogin) {
				uni.redirectTo({
					url: '/pages/index/index'
				});
			}
		},
		components:{Login,Register,Password},
		methods: {
			login: function (e) {
				console.log(this.account)
			},
			changeStatus: function (index) {
				this.status=index;
			}
		}
	}
</script>
<style>
	.login{
		height: 1316upx;
		position: relative;
	}
	image.login_bg{
		height: 100%;
		width: 100%;
		filter: blur(15upx);
	}
	image.login_pic{
		height: 100%;
		width: 100%;
	}
</style>