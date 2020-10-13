<template>
    <div class="tab-control">
       <div  @click="itemClick(i)" v-for="(v,i) in titles " :key="i" class="tab-control-item" :class="{active: i === currentIndex }" >
           <span>{{v}}</span>
       </div>
    </div>
</template>
<script>
export default {
    name:"TabControl",
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            currentIndex:0,
        }
    },
    methods: {
        itemClick(i){
            
            this.currentIndex=i;
            this.$emit('tabClick',i)
        }
    },
}
</script>
<style scoped>
   .tab-control{
       display: flex;
       width: 100%;
       background-color:rgb(255, 255, 255);
       text-align: center;
   }
   .tab-control-item{
        flex: 1;
        height: 44px;
        line-height: 44px;
   }
   .active{
       color: pink;

   }
   .active span{
       padding:  0  10px px 10px; 
       border-bottom: solid 2px pink ;
   }
</style>