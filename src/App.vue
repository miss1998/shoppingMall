<template>
  <div id="app">
    
    <keep-alive exclude="Detail,Profile,UserInfo">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar v-show="isShow"></main-tab-bar>
     
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'


export default {
  name: 'App',
  data(){
    return {
     
    }
  },
  components: {
    MainTabBar,
  },
  computed: {
    isShow(){
      // console.log(this.$route.path);
      return !this.$route.path.includes('login')
    }
  },
  
}
</script>

<style>
@import  'assets/css/base.css';

</style>
