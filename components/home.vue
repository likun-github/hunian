<template>
	<view class="container">
		<swiper :indicator-dots="false" :autoplay="false" :circular="true" @change="bgmusichome" :current="bgindex">
			<swiper-item v-for="item in sliderList" :key="item" onchan>
				<image :src="item"  @tap="changeShow"></image>
			</swiper-item>
		</swiper>
		<view class="top" v-if="show">
			<text>护念</text>
		</view>
		<Daily v-if="show"></Daily>
	</view>
</template>

<script>
	import Daily from '@/components/daily.vue';
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {


			}
		},
		computed: {
			...mapState(["show", "bgindex", "sliderList"])
		},
		methods: {
			...mapMutations(['changeShow', 'bgmusicplayer', 'bgmusicstop']),
			bgmusichome: function(e) {
				this.bgmusicplayer(e.detail.current);
			},

		},
		onShow: function() {
			this.bgmusicplayer(this.bgindex);

		},
		onHide: function() {
			this.bgmusicstop();
		},
		components: {
			Daily
		}
	}
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
	}

	swiper {
		width: 750upx;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}

	swiper image {
		width: 750upx;
		height: 100%;
	}

	.top {
		height: 160upx;
		line-height: 160upx;
		text-align: center;
		transition: 1s;
	}

	.top text {
		color: #fff;
	}

	.middle {
		margin: 30upx;
		width: 690upx;
		height: 160upx;
		background: #fff;
		border-radius: 30upx;
		font-size: 30upx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		opacity: 0.8;
	}
</style>
