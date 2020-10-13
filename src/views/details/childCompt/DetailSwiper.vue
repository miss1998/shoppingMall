<template>
    
        <swiper>
            <swiper-item  class="swiper-item"  v-for="(val,key) in topImages" :key="key"> 
                 <img :src="val" alt="">
            </swiper-item>
        </swiper>
    
</template>
<script>
import {Swiper, SwiperItem } from 'components/common/swiper/index'
export default {
    name:"",
    data() {
        return {
            
        }
    },
    props:{
        topImages:{
            type:Array,
            default(){
                return []
            }            
        }
    },
    components:{
        Swiper,SwiperItem
    }
}
</script>
<style scoped>
    .swiper-item{
        height: 300px;
    }
</style>