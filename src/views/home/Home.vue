<template>
    <div class="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <tab-control class="newTab" v-show="navShow" :titles="['流行','新款','推荐']" @tabClick='tabClick' ref="tabControl1"></tab-control>
        <scroll class="content" ref="top" :probe-type="3"
          @scroll='contentScroll' :pull-up-load="true"
          @pullingUp='loadMore'
          >
            
            <home-swiper :banners="banners"></home-swiper>
            <recommend :recommends="recommends"></recommend>
            <f></f>
            <tab-control :titles="['流行','新款','推荐']" @tabClick='tabClick'  ref="tabControl"></tab-control>

            <good-list :goods="showGoods"></good-list>
        </scroll>
        <back-top  @click.native="backClick"  v-show="isShow"></back-top>
        
    </div>
</template>
<script>

import HomeSwiper from './childComps/homeSwiper'
import Recommend from './childComps/RecommendView'
import F from './childComps/F'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodList from 'components/content/goods/goodList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import {getHomeMultidata,getHomeGoods} from "network/home"
export default {
    name:"Home",
    data() {
        return {
            result:null,
            banners:[],
            recommends:[],
            goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
            },
            currentType:'pop',
            isShow:false,
            navOffsetLeft:null,
            navShow:false,
            savaY:0,

        }
    },
    components:{
        NavBar,HomeSwiper,Recommend,F,TabControl,GoodList,Scroll,BackTop
    },
    computed: {
        showGoods(){
            return this.goods[this.currentType].list;
        },
    },
    methods: {
        
        tabClick(index){
            switch(index){
                case 0:this.currentType='pop';break;
                case 1:this.currentType='new';break;
                case 2:this.currentType='sell';break;
            }
            this.$refs.tabControl.currentIndex=index;
            this.$refs.tabControl1.currentIndex=index;
            // console.log(this.currentType)
        },
        getHomeGoods(type){
            
            let page=this.goods[type].page+1;
            // console.log(page);
            getHomeGoods(type,page).then(res=>{            
            this.goods[type].list.push(...res.data.data.list)
            this.goods[type].page+=1; 
            this.$refs.top.scroll.refresh()
             this.$refs.top.finishPullUp()                       
        },err=>{
            // console.log(err);
        })
        },
        backClick(){
            this.$refs.top.scroll.scrollTo(0,0,500)
        },
        contentScroll(options){
            this.isShow= (-options.y)>1000;
            // console.log(this.isShow)
            // console.log(-options.y,this.navOffsetLeft);
            this.navShow=(-options.y)>=this.navOffsetLeft;
        },
        loadMore(){
            this.getHomeGoods(this.currentType);
            
        },
        throttle(fn,delay=20){
            let timer=Date.now();
            let tim=null
            return function(...arg){
                var newTimer=Date.now();
                
                if (newTimer-timer>delay){                                        
                    fn.apply(this,arg);
                    timer=newTimer;
                }else{
                    clearTimeout(timer)
                    tim=setTimeout(()=>{
                        fn.apply(this,arg);
                    },1000)

                }
            }
        },
        // changeTop(){
        //     console.log(this.$refs.tabControl.$el.offsetTop);
        // }
    },
    created() {
        getHomeMultidata().then(res=>{
            //  this.$refs.top.refresh()
            this.banners=res.data.data.banner.list;
            this.recommends=res.data.data.recommend.list;
            // console.log(this.banners)
        }),
        this.getHomeGoods('pop');
        this.getHomeGoods('new');
        this.getHomeGoods('sell');
        
        
    },
    mounted() {
        const refresh=this.throttle(this.$refs.top.refresh,10);
        this.$bus.$on('itemImgLoadOver',()=>{                            
             this.$refs.top&&  refresh()  ;                         
        });
        
        // console.log("1",);
    },
    updated() {
        // this.$refs.top.refresh()
        this.$nextTick(function(){            
                 this.navOffsetLeft=this.$refs.tabControl.$el.offsetTop;
                //  console.log(this.navOffsetLeft);             
        },1000) 
        
    },
    activated() {
        this.$refs.top.scroll.scrollTo(0,this.savaY,0);
        this.$refs.top.refresh()
    },
    deactivated() {
        // console.log(this.$refs.top.scroll.y);
        this.savaY= this.$refs.top.scroll.y;
    },
    
}
</script>
<style  scoped>
    .home{
        
        height: calc(100vh - 44px);
        
    }
    .home-nav{
        background-color: var(--color-tint);
        color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
        
    }
    ul li{
        width: 50px;
        overflow: hidden;
        white-space:nowrap;
        text-overflow: ellipsis;
    }
    .tab-control{
        position: sticky;
        top: 44px;
        /* z-index: 9; */
    }
    .content{
        margin-top: 44px;
        height: calc(100% - 49px);
        overflow: hidden;
    }
    .newTab{
        position: absolute;
        z-index: 9;
        /* font-size: 14px; */

    }
</style> 