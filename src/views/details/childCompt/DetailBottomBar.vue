<template>
    <div class="detailBottom">
        <div class="DB-left">
            <div>
                <i class="icon  service"></i>
                <span>客服</span>
            </div>
            <div>
                <i class="icon show"></i>
                <span>店铺</span>
            </div>
            <div>
                <i class="icon "></i>
                <span>收藏</span>
            </div>
        </div>
        <div class="DB-right">
            <div class="right-item1 cart" @click="addCart">加入购物车</div>
            <div class="right-item2 buy">购买</div>
        </div>
    </div>
</template>
<script>
export default {
    name:"DetailBottomBar",
    methods: {
        addCart(){
            this.$emit('addCart')
        }
    },

}
</script>
<style scoped>
    .detailBottom{
        font-size: 15px;
        position: absolute;
        height: 49px;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
        display: flex;
        /* background: url('~assets/img/detail/detail_bottom.png')  0 0/100%; */
    }
    .detailBottom .DB-left{
        flex: 1;
        display:flex;
        text-align: center;
        align-items: center;

    }    
    .detailBottom .DB-left div{
        flex: 1;
        display:flex;
        flex-direction: column;
        align-items: center;
        
    }
    .DB-left .icon{
        width: 22px;
        height: 22px;
        background: url('~assets/img/detail/detail_bottom.png')  0 0/100%;
    }
    .DB-left .service{
        background-position: 0 -54px;
    }
    .DB-left .show{
        background-position: 0 -98px;
    }
    .detailBottom .DB-right{
        flex: 1;
        display: flex;
        /* text-align: center; */
        /* align-items: center; */
    }
    .DB-right .right-item1{
        flex: 1;        
        background: chocolate;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .DB-right .right-item2{
        flex: 1;    
        height: 100%;    
        background: pink;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>