<template>
	<view class="register_form">
		<view class="register_form_top">注册账号</view>
		<input placeholder="账号" v-model="account" placeholder-style="color:#ccc"/>
		<input placeholder="密码" password v-model="password" placeholder-style="color:#ccc"/>
		<button type="primary" @tap="register"> 注册 </button>
		<view class="register_form_bottom" >
			<text @tap="changeStatus">已有账号？去登陆</text>
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
		methods: {
			register: function (e) {
				if(this.account==''||this.password==''){
					uni.showToast({
						title: '账号或密码不能为空',
						duration: 2000,
						icon:'none'
					});
					return;
				}
				
				uni.request({
					url:'https://xiaoyibang.top/calm/register',
					data:{
						username:this.account,
						password:this.password,
					},
					success: (res) => {
						console.log(res.data.success)
						if(res.data.success){
							uni.showToast({
								title: '账号创建成功',
								duration: 2000,
								icon:'none'
							});	
						}},
							
					fail: () => {
						uni.showToast({
							title: '网络故障',
							duration: 2000,
							icon:'none'
						});	
					}
				});
				console.log(this.account)
			},
			changeStatus:function(index){
				this.$emit('changeStatus',1);
			}
		}
	}
</script>
<style>
	.register_form{
		width: 650upx;
		position: absolute;
		top: 400upx;
		left: 50upx;
	}
	.register_form .register_form_top{
		color: #FFFFFF;
		font-size: 50upx;
		text-align: center;
	}
	.register_form .register_form_bottom{
		color: #FFFFFF;
		font-size: 30upx;
		text-align: center;
		text-decoration: underline;
		display: flex;
		justify-content: space-between;
		margin-top: 30upx;
	}
	.register_form input{
		margin: 30upx 0 ;
		background: #000;
		opacity: 0.5;
		height: 80upx;
		border-radius: 10upx;
		color: #fff;
		padding: 0 30upx;
	}
</style>