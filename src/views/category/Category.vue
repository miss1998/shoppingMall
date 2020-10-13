<template >
    <div class="classify">
        <nav> 分类</nav>
        <div class="classify-main">
           
            
            <scroll class="content">
                 <div class="cf-nav">
                    <div :class="{isActive: currentIndex === index}" v-for="(item,index) in categories " :key="index" @click="navClick(index)">
                        {{ item.title }}
                    </div>      
                </div>
             </scroll>
             
                <scroll class="cont">
                <div class="cf-right">
                    <div class="right-items" v-for="(item,index) in categoryData" :key="index">
                        <img :src="item.image" alt="图片">                    
                        <span>{{item.title}}</span>
                    </div>   
                              
                </div>
                </scroll>
           
           
        </div>
    </div>
</template>
<script>
import Scroll from 'components/common/scroll/Scroll'
import { getCategory , getSubcategory,  getCategoryDetail } from '@/network/category'
export default {
    name:"Category",
    data(){
        return {
            categories:[],
            categoryData:{},
            currentIndex:0,
        }
    },
    created(){
        getCategory().then(res=>{
            this.categories=res.data.data.category.list;
            // console.log(this.categories);
            getSubcategory(this.categories[0].maitKey).then(res => {
                
            this.categoryData=res.data.data.list;
            console.log(this.categoryData);
            
        })
        },err=>{});
        
    },
    methods:{
        navClick(index){
            this.currentIndex=index
            getSubcategory(this.categories[index].maitKey).then(res=>{
                this.categoryData=res.data.data.list;
            })
        }
    },
    components:{
        Scroll,
    }
}
</script>
<style scoped>
    .classify{
        height: 100vh;
        width: 100vw;
        font-size: 14px;
    }
    nav{
        height: 44px;
        background: pink;
        text-align: center;
        line-height: 44px;
    }
    
    .classify-main{
        height: calc(100vh - 44px ) ;
        background: rgb(241, 224, 224);
        /* color: rgb(247, 215, 193); */
        display: flex;
        flex-direction: row;
        text-align: center;
    }
    .cf-nav{
        width: 100px;
        height: 100%;
        display: flex;
        flex-direction: column;        
        align-items: center;
        border: solid 1px rgb(187, 187, 187);

    }
    .cf-nav div{
        width: 100%;
        height: 50px;
        border-bottom:solid 1px  rgb(187, 187, 187);
        line-height: 30px;
    }
    .cf-right{        
        flex: 1;
        padding: 15px 10px;
        background: rgb(255, 255, 255);
        font-size: 12px;
        overflow: auto;
    }
    .cf-right > div{
        float: left;
        width: 33%;
        
        height: 95px;     
        /* background:burlywood ; */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;

    }
    .right-items img{
        width: 70%;
        height: 60px;
    }
    .isActive{
        /* color: rgb(241, 224, 224); */
        background: salmon;
    }
    .content{
        height: calc(100% - 44px);
        overflow: hidden;
    }
    .cont{
        flex: 1;
        background: rgb(253, 253, 253);
        height: calc(100% - 44px);
        overflow: hidden;
    }
</style>