import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex)
const bgAudioMannager = uni.createInnerAudioContext();
bgAudioMannager.autoplay=false;
const store = new Vuex.Store({
	
    state: {
    	musicList:[],
    	scenesList:[],
		sleepList:[],
		meditateList:[],
		courseList:[],
        music:{
        	play:false,
        	coverImgUrl: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg',
        	name: '致爱丽丝',
			authorphoto: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg',
        	author: '暂无',
			narrator: '暂无',
        	src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3',
			introduction: '暂无',
			minute:0,
			second:0,
        	currentTime:0,
			duration:300
        },
		abgmusic:[
			"/static/01.mp3",
			"/static/02.mp3",
			"/static/03.mp3",
			"/static/04.mp3",	
			"/static/05.mp3",
			"/static/06.mp3"
		],
		sliderList:[
			"/static/01.gif",
			"/static/02.gif",
			"/static/03.gif",
			"/static/04.gif",
			"/static/05.gif",
			"/static/06.gif"
		],
		currentpicture:"/static/01.gif",
		percentage:0,
		tabIndex:0,
		show:true,
		havemusic:false,
		firsttime:false,
		bgindex:0,
		dailymusic:[],
    },
    mutations: {
			
		getdailymusic(state,provider){		
			state.dailymusic=provider;
		},
		bgmusicplayer(state,provider){		
			console.log(state.currentpicture);
			state.bgindex=provider;
			state.currentpicture=state.sliderList[state.bgindex];
			const bgmusic = uni.getBackgroundAudioManager();
			//bgmusic.loop=true;
			bgmusic.src=state.abgmusic[state.bgindex];
			bgmusic.play();		
		},
		bgmusicstop(){
			const bgmusic = uni.getBackgroundAudioManager();
			bgmusic.stop();
		},
		changePlay(state){
			state.music.play=!state.music.play;
			let interval=setInterval(function(){ 
				state.music.currentTime=bgAudioMannager.currentTime;
				state.percentage=Math.floor(state.music.currentTime*100/state.music.duration);
				if(state.music.duration<=state.music.currentTime){
					state.music.play=false;
// 					bgAudioMannager.seek(0);
// 					state.music.currentTime=0;
					bgAudioMannager.stop();
					
				}
				if(!state.music.play){
					clearInterval(interval);
				}
				}, 1000);
			if(state.music.play){
				bgAudioMannager.play();
			}else{
				bgAudioMannager.pause();
			}
		},
		changeStop(state){	
			bgAudioMannager.stop();
			state.music.play=false;
		},
		changepause(state){
			bgAudioMannager.pause();
			state.music.play=false;
		},
		musicback(state){
			bgAudioMannager.seek(bgAudioMannager.currentTime-15);
		},
		musicforward(state,provider){
			bgAudioMannager.seek(bgAudioMannager.currentTime+15);
		},
		seek(state, provider){
			bgAudioMannager.seek(provider);
		},
		changeTab(state, provider){
			state.tabIndex=provider;
			const bgmusic = uni.getBackgroundAudioManager();
			if(provider!=0){
				
				bgmusic.stop();
			}
			else{
				bgmusic.src=state.abgmusic[state.bgindex];
			}
		},
		changeShow(state){
			state.show=!state.show;
		},
		getMusicList(state,provider){
			state.musicList=provider;
		},
		getsleepList(state,provider){		
			state.sleepList=provider;
		//	console.log(state.sleepList);
			
		},
		getmeditateList(state,provider){
			state.meditateList=provider;
		},
		selectMusic(state,provider){
			if(provider.url){
				state.firsttime=true;
				state.havemusic=true;
				if(state.music.src!=provider.url)
				{
					state.music.coverImgUrl=provider.picture;
					state.music.name=provider.name;
					state.music.authorphoto=provider.photo;
					state.music.author=provider.author;
					state.music.narrator=provider.narrator;
					state.music.src=provider.url;
					state.music.introduction=provider.about;
					state.music.duration=provider.time;
					state.music.play=false;
					state.music.minute=provider.minute;
					console.log(state.music.minute);
					state.music.second=provider.second;
					console.log(state.music.second);
					state.music.currentTime=0;
					
				
					bgAudioMannager.src = state.music.src;
					
				}
			}
			
		}
    }
})

export default store