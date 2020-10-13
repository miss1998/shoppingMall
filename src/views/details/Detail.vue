<template>
    <div class="detail">
        <detail-nav-bar class="detail-nav" @clickNavbar='clickNavbar' ref="detailNav">  </detail-nav-bar>
        <scroll class="content" ref="top" :probe-type="3"
           :pull-up-load="true" @scroll='scroll'
          >
            <detail-swiper :topImages="topImages">  </detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info :detailInfo='detailInfo' @imageLoad='imageLoad'></detail-goods-info>\
            <detail-param-info :paramInfo='paramInfo' ref="paramInfo"></detail-param-info>
            <detail-comment-info :commentInfo='commentInfo' ref="commentInfo"></detail-comment-info>
            <good-list :goods="recommend"  ref="recommend"></good-list>
        </scroll>
        <back-top v-show="backTopShow" @click.native="backClick"></back-top>
        <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    </div>
</template>
<script>
import detailNavBar from'./childCompt/DetailsNavBar'
import DetailSwiper from './childCompt/DetailSwiper'
import DetailBaseInfo from './childCompt/DetailBaseInfo'
import DetailShopInfo from './childCompt/DetailShopInfo'
import DetailGoodsInfo from './childCompt/DetailGoodsInfo'
import DetailParamInfo from './childCompt/DetailParamInfo'
import DetailCommentInfo from './childCompt/DetailCommentInfo'
import DetailBottomBar from './childCompt/DetailBottomBar'
import GoodList from 'components/content/goods/goodList'
import {backtopMixin} from '@/common/mixin'

import Scroll from 'components/common/scroll/Scroll'
import Cookie from 'js-cookie'
import {getDetail, Goods, Shop, GoodsParam,getRecommend} from "network/details";
export default {
    name:"Detail",
    mixins:[backtopMixin],
    data(){
        return {
            //数据ID
            id:null,
            //商品轮播图数据
            topImages:null,
            goods:{},
            shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo:{},
        recommend:[],
        timer:null,
        backTops:[],
       
        }
    },
    methods: {
        imageLoad(){
            // console.log('refresh');
            this.$refs.top.refresh();
             this.$nextTick(()=>{
            var a=this.$refs.paramInfo.$el.offsetTop;
            var b= this.$refs.commentInfo.$el.offsetTop;
            var c=this.$refs.recommend.$el.offsetTop;
            this.backTops=[];
            this.backTops=this.backTops.concat([0,-a,-b,-c]);
            
            
            // console.log(this.backTops);
            
        })
        },
        clickNavbar(index){
            // console.log("s");
            this.$refs.top.scroll.scrollTo(0,this.backTops[index])
        },
        scroll(options){
            // console.log(options);
            this.backTops.forEach((value,index) => {
                if(this.$refs.detailNav.currentIndex!= index&& (options.y<=value &&options.y<=value)){
                    this.$refs.detailNav.currentIndex=index;
                }
            });
            if(options.y>-1000&&this.backTopShow){
                this.backTopShow=false
            }
            if(options.y<-1000&& !this.backTopShow){
                this.backTopShow=true;
            }

        },
        addToCart(){
            // console.log(this.goods);
            if( Cookie.get('token')){                     
                const  product=[];
                product.image=this.topImages[0];
                product.title=this.goods.title;
                product.desc=this.goods.desc;
                product.price=this.goods.realPrice;
                product.iid=this.id;
            
                this.$store.dispatch('addCart',product);
                this.$toast.show('添加成功',1000)
            }else{
                this.$router.replace({path:'/login'});
                this.$toast.show('请登录',1000)
            }
        }
        
    },
    components:{
        detailNavBar,
        DetailSwiper,
            DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      Scroll,
      DetailCommentInfo,
      GoodList,
      DetailBottomBar,
     
    },
    created() {
        console.log();
        this.id=this.$route.params.id;
        //获取商品数据
        getDetail(this.id).then(res=>{
            // console.log(res.data.result);
            // this.topImages=res.data.result.itemInfo.topImages;
            const data = res.data.result;
            //1.轮播图信息
        this.topImages = data.itemInfo.topImages

        // 2.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 3.创建店铺信息的对象
        this.shop = new Shop(data.shopInfo)

        // 4.保存商品的详情数据
        this.detailInfo = data.detailInfo;

        // 5.获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        // 6.获取评论信息
        if(data.rate.cRate !== 0 ){
            this.commentInfo=data.rate.list[0];
        }


        })
        //获取推荐数据
        getRecommend().then(res=>{
            // console.log(res.data.data.list);
            this.recommend=res.data.data.list;
        })

    },
    mounted() {
        this.$bus.$on('detailImgLoadOver',()=>{
            clearTimeout(this.timer);
            this.timer=setTimeout(() => {
                // console.log('1');
                this.$refs.top&&this.$refs.top.refresh();
           
            }, 100);
        })
    },
    updated() {
        // this.$nextTick(function(){
        //     console.log("gengxin");
        //       this.$refs.top.refresh();
        // })
        //paramInfo  commentInfo recommend
      
    },
}
</script>
<style scoped>
    .detail{
        position: relative;
        z-index: 9;
        background-color: #fff;
        height: 100vh;
    }
    .detail-nav{
        position: relative;
        z-index: 10;
        background-color: #fff;
    }
    .content{
        height: calc(100% - 93px);
        overflow: hidden;
    }
</style>