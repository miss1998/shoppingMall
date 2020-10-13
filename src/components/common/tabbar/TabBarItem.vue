<template>
  
    <div  @click="itemclick" class="tab-bar-item">
      <div v-if="!isActive">
         <slot  name="item-icon"></slot>
      </div>
      <div v-else>
        <slot  name="item-icon-active"></slot>
      </div>             
       <div :style="activeStyle">
         <slot name="item-text"></slot>
       </div>
     
    </div>
  
</template>

<script>

export default {
  name: 'TabBarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"red"
    }
  },
  data(){
    return {
      // isActive:true,
    }
  },
  methods:{
    itemclick(){
      
      if(this.$route.path!=this.path){
        
        this.$router.replace(this.path);  
      }
      
    },
  },
  components: {
    
  },
  computed: {
    isActive(){
      return this.$route.path.includes(this.path);              
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{};
    }
  },
}
</script>

<style scoped>

.tab-bar-item{
  text-align: center;
  flex: 1;
  height: 49px;  
  font-size: 14px;
}
.tab-bar-item img{  
  width:24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
.active{
  color:crimson;
}
</style>
