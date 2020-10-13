<template>
    <div class="CartList">
        <div class="buy-cart" v-for="(item,index ) in cartList" :key="index">
            <div class="item-select">
                <check-botton @click.native="checkClick(item.iid)" :check='item.check'></check-botton>
            </div>
            <div class="item-img">
                <img :src="item.image" >
               
            </div>
            <div class="item-info">
                <div class="item-title">{{item.title}}</div>
                <div class="item-desc">{{item.desc}}</div>
                <div class="item-other">
                    <span>{{item.price}}</span>
                    <span>{{item.count}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import CheckBotton from 'components/content/checkButton/CheckButton'
export default {
    name:"CartList",
    data(){
        return {

        }
    },
    components:{
        CheckBotton,
    },
    methods: {
        checkClick(id){
            this.$store.commit('changeCartInfo',id)
        }
    },
    computed: {
        ...mapGetters(['cartList'])
    },
}
</script>
<style scoped>
    .CartList{
       
    }
    .item-select{
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .buy-cart{
        width: 100%;
        height: 100px;
        margin: 10px 0;
        border-radius:7px ;
         background: rgb(255, 255, 255);
        display: flex;
        flex-direction: row;
        text-align: center;
        overflow: hidden;
    }
    .item-select{
        display: flex;
        justify-content: center;
    }
    .item-img{
        
      width: 80px;
      

    }
    .item-img img{
        width: 100%;
        height: 100%;
        border-radius: 7px;
    }
    .item-info{
        margin: 0 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
        flex: 1;
    }
    .item-title,.item-desc{
        flex: 1;
        width: 100%;
        align-self: start;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 14px;   
    }
    .item-other{
        width: 100%;
        flex: 1;
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
    }
</style>