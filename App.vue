<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
			plus.navigator.setFullscreen(true);
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	@font-face {
		font-family: 'iconfont';
		src: url('https://at.alicdn.com/t/font_959490_dzm2a2p5mzs.ttf') format('truetype');
	}
	/*每个页面公共css */
	uni-page-head{
		display: none;
	}
	page,
	.page-body{
		height: 100%;
		width: 750upx;
		background-color: #000;
	}
	.status_bar {
        height: var(--status-bar-height);
        width: 100%;
    }
</style>
