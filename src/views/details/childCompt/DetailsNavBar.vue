<template>
    <div>
        <nav-bar class="detailnavbar">
            <div slot="left" class="back" @click="backClick">
                <img src="~assets/img/common/back.svg" alt="">
            </div>
            <div slot="center" class="detailnavbar">
                <div  v-for="(v,i) in title" :key="i" @click="changIndex(i)" 
                :class="{isActive: i==currentIndex}">
            {{v}}
        </div>
            </div>
        </nav-bar>
    </div>
</template>
<script>
import navBar from'components/common/navbar/NavBar.vue'
export default {
    name:"DetailsNavBar",
    data(){
        return {
            title:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    methods: {
        changIndex(index){
            this.currentIndex=index;
            this.$emit("clickNavbar",index)
        },
        backClick(){
            this.$router.go(-1);
        }
    },
    components:{
        navBar
    }
}
</script>
<style scoped>
    .isActive{
        color:var(--color-high-text);
    }
    .back{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .detailnavbar{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>