<template>
    <div class="cart">
        <nav-bar class="cart-nav">
            <div slot="center">购物车({{cartLength}})</div>
        </nav-bar>
        <scroll
            class="content" ref="top" :probe-type="3"
            @scroll='contentScroll' :pull-up-load="true"
            @pullingUp='loadMore'
        >
            <cart-list></cart-list>
        </scroll>
        <check-buttom-bar class="checkbb"></check-buttom-bar>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childCompt/CartList'
import CheckButtomBar  from'./childCompt/CheckBottomBar'
import Scroll from 'components/common/scroll/Scroll'
import {mapGetters} from'vuex'
export default {
    name:"Cart",
    methods: {
        contentScroll(){

        },
        loadMore(){

        }
    },
    components:{
        NavBar,CartList,Scroll,CheckButtomBar
    },
    computed: {
        ...mapGetters(['cartLength'])
    },
    activated() {
        // console.log("shuaxin");
        this.$refs.top.refresh();
    },
}
</script>
<style  scoped>
.cart{
    height: 100vh;
}
.cart-nav{
    background: pink;
}
.content{
    height: calc(100% - 142px);
    overflow: hidden;
    background: #f5f4f4;
}
.checkbb{

}
</style>