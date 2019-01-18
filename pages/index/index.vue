<template>
	<view class="container">
		<view class="status_bar"></view>
		<Home v-if="tabIndex === 0"></Home>
		<Sleep v-if="tabIndex === 1"></Sleep>
		<Meditate v-if="tabIndex === 2"></Meditate>
		<Music v-if="tabIndex === 3"></Music>
		<More v-if="tabIndex === 4"></More>
		<Audio v-if="show&&havemusic"></Audio>
		<Tab></Tab>
	</view>
</template>

<script>
	var self;
	var musicnumber = 0;
	var homenumber=0;
	var meditatenumber = 0;
	var sleepnumber = 0;
	var dailynumber=0;
	var myfile = new Array();

	import Home from '@/components/home.vue';
	import Sleep from '@/components/sleep.vue';
	import Meditate from '@/components/meditate.vue';
	import Music from '@/components/music.vue';
	import More from '@/components/more.vue';
	import Audio from '@/components/audio.vue';
	import Tab from '@/components/tab.vue';
	import musicList from '../../common/music.js';
	import sleepList from '../../common/sleep.js';
	import meditateList from '../../common/meditete.js';
	import homeList from '../../common/home.js';
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			oldfile: [];
			sleepList: [];
			musicList: [];
			dailyList: [];
			meditateList: [],
			self = this
			return {
				List:[
					"https://xiaoyibang.top/uploads/uploads/morning.mp3",
					"https://xiaoyibang.top/uploads/uploads/focus.mp3",
					"https://xiaoyibang.top/uploads/uploads/lunch.mp3",
					"https://xiaoyibang.top/uploads/uploads/night.mp3",
				],
				date :0,
			}
		},
		onLoad: function() {
			self.dailyList = uni.getStorageSync('home_key');
			if (self.dailyList) {
				console.log('是');
				self.getdailymusic(self.dailyList);
			} else {
				console.log('否');
				self.getdailymusic(homeList);
				for (var i=0;i<4;i++) {
					console.log('i='+i);
					self.allhomemusic(i);
				}
			}
// 			console.log(sleepList1);
// 			self.getdailymusic(homeList);
			
			
			self.getmeditateList(meditateList);
			self.getsleepList(sleepList);
			self.getMusicList(musicList);
			console.log(homeList)
			
		},
		onUnload: function() {
			console.log('页面卸载');


		},
		computed: {
			...mapState(["show", "tabIndex", "havemusic"])
		},
		methods: {
			...mapMutations(['changeShow', 'getMusicList', 'getsleepList', 'getdailymusic', 'getmeditateList']),
			allhomemusic:function(i){
				uni.downloadFile({
					url: self.List[i],
					success: (res) => {
						if (res.statusCode === 200) {
							console.log('下载完成');
							var newFile = res.tempFilePath;
							uni.saveFile({
								tempFilePath: newFile,
								success: function(res) {
									homeList[i].url = res.savedFilePath;
									homenumber++;
									self.getdailymusic(homeList);
									if (homenumber == 4) {
										
										uni.setStorage({
											key: 'home_key',
											data: homeList,
											success: function() {
												console.log('success');
											}
										});
									}
									console.log('节点三');
								},
								fail: function() {
									console.log('保存失败');
								},
								complete: function() {
									console.log('保存完成');
				
								}
							});
				
				
						}
					},
					fail: function() {
						console.log('失败i'+i);
					}
				});
			
           },
		},
		components: {
			Tab,
			Audio,
			Home,
			Sleep,
			Meditate,
			Music,
			More
		}
	}
</script>

<style>
	page,
	.page-body {
		background-color: rgba(0,0,0,0);
	}

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
