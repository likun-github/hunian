<template>
	<view class="tab" v-show="show">
		<view class="tab_item" @tap="changeTab(0)" v-if="0==tabIndex">
			<!-- <text style='font-size: 50upx;font-family: iconfont;color: #fff;'>&#xe70c;</text> -->
			<image src="../../static/1.png"></image>
			<!-- <image src="../static/home3.png"></image> -->

			<text style="color:#fff">扉页</text>
		</view>
		<view class="tab_item" @tap="changeTab(0)" v-else>
			<!-- <text style='font-size: 50upx;font-family: iconfont;color: #bbb;'>&#xe609;</text> -->
			<image src="../../static/2.png" ></image>
			<text style="color:#bbb">扉页</text>
		</view>
		<view class="tab_item" @tap="changeTab(1)" v-if="1==tabIndex">
			<!-- <text style='font-size: 50upx;font-family: iconfont;color: #fff;'>&#xe691;</text> -->
			<image src="../../static/3.png"></image>
			<text style="color:#fff">安睡</text>
		</view>
		<view class="tab_item" @tap="changeTab(1)" v-else>
			<!-- <text style='font-size: 50upx;font-family: iconfont;color: #bbb;'>&#xe690;</text> -->
			<image src="../../static/4.png"></image>
			<text style="color:#bbb">安睡</text>
		</view>
		<view class="tab_item" @tap="changeTab(2)" v-if="2==tabIndex">
			<!-- <text style='font-size: 50upx;font-family: iconfont;color: #fff;'>&#xe6d0;</text> -->
			<image src="../../static/5.png"></image>
			<text style="color:#fff">冥想</text>
		</view>
		<view class="tab_item" @tap="changeTab(2)" v-else>
			<!-- <text style='font-size: 50upx;font-family: iconfont;color: #bbb;'>&#xe621;</text> -->
			<image src="../../static/6.png"></image>
			<text style="color:#bbb">冥想</text>
		</view>
		<view class="tab_item" @tap="changeTab(3)" v-if="3==tabIndex">
			<!-- <text style='font-size: 50upx;font-family: iconfont;color: #fff;'>&#xe7c6;</text> -->
			<image src="../../static/7.png"></image>
			<text style="color:#fff">音乐</text>
		</view>
		<view class="tab_item" @tap="changeTab(3)" v-else>
			<!-- <text style='font-size: 50upx;font-family: iconfont;color: #bbb;'>&#xe619;</text> -->
			<image src="../../static/8.png"></image>
			<text style="color:#bbb">音乐</text>
		</view>
		<view class="tab_item" @tap="changeTab(4)" v-if="4==tabIndex">
			<!-- <text style='font-size: 50upx;font-family: iconfont;color: #fff;'>&#xe717;</text> -->
			<image src="../../static/9.png"></image>
			<text style="color:#fff">我</text>
		</view>
		<view class="tab_item" @tap="changeTab(4)" v-else>
			<!-- <text style='font-size: 50upx;font-family: iconfont;color: #bbb;'>&#xe60b;</text> -->
			<image src="../../static/10.png"></image> 
			<text style="color:#bbb">我</text>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				tabs: [{
						page: 'index',
						name: '主页',
						icon: '&#xe609;',
						selected_icon: '&#xe70c;',
						path: '/static/home.png',
						select_path: '/static/home_selected.png',
						nodes: [{
							name: 'div',
							children: [{
								type: 'node',
								name: '&#xe609;'
							}]
						}],
						select_nodes: [{
							name: 'div',
							children: [{
								type: 'node',
								name: '&#xe70c;'
							}]
						}]
					},
					{
						page: 'sleep',
						name: '睡眠',
						icon: '&#xe690;',
						selected_icon: '&#xe691;',
						path: '/static/sleep.png',
						select_path: '/static/sleep_selected.png',
						nodes: [{
							name: 'div',
							children: [{
								type: 'text',
								text: '&#xe690;'
							}]
						}],
						select_nodes: [{
							name: 'div',
							children: [{
								type: 'text',
								text: '&#xe691;'
							}]
						}]
					},
					{
						page: 'meditate',
						name: '课程',
						icon: '&#xe621;',
						selected_icon: '&#xe6d0;',
						path: '/static/meditate.png',
						select_path: '/static/meditate_selected.png',
						nodes: [{
							name: 'div',
							children: [{
								type: 'text',
								text: '&#xe621;'
							}]
						}],
						select_nodes: [{
							name: 'div',
							children: [{
								type: 'text',
								text: '&#xe6d0;'
							}]
						}]
					},
					{
						page: 'music',
						name: '音乐',
						icon: '&#xe619;',
						selected_icon: '&#xe7c6;',
						path: '/static/music.png',
						select_path: '/static/music_selected.png',
						nodes: [{
							name: 'div',
							children: [{
								type: 'text',
								text: '&#xe619;'
							}]
						}],
						select_nodes: [{
							name: 'div',
							children: [{
								type: 'text',
								text: '&#xe7c6;'
							}]
						}]
					},
					{
						page: 'more',
						name: '更多',
						icon: '&#xe60b;',
						selected_icon: '&#xe717;',
						path: '/static/more.png',
						select_path: '/static/more_selected.png',
						nodes: [{
							name: 'div',
							children: [{
								type: 'text',
								text: '&#xe60b;'
							}]
						}],
						select_nodes: [{
							name: 'div',
							children: [{
								type: 'text',
								text: '&#xe717;'
							}]
						}]
					}
				]
			}
		},
		computed: {
			...mapState(["tabIndex", "show"]),
		},
		onLoad: function() {

		},
		methods: {
			...mapMutations(["changeTab"])
		}
	}
</script>
<style>
	.tab {
		position: fixed;
		bottom: 0upx;
		display: flex;
		background:linear-gradient(top,rgba(255,255,255,0) 0%,rgba(0,0,0,1) 100%);

	}

	.tab_item {
		flex: 1;
		width: 150upx;
		height: 150upx;
		text-align: center;
		padding: 20upx 0;
		display: flex;
		flex-direction: column;
	}

	.tab_item image {
		width: 100upx;
		height: 100upx;
		display: block;
		margin: 10upx auto;
	}

	.tab_item text {
		font-size: 24upx;
		color: #bbb;
	}
</style>
