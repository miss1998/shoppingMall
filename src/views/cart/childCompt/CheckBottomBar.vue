<template>
    <div class="check-bb">
        <div class="check-all">
            <check-botton @click.native="checkAll" :check='isCheckAllCart'></check-botton>
            <span>全选</span>            
        </div>
        <div>
            合计:{{getCartAllMoney}}
        </div>
        <div>
            去结算({{getCheckLength.length}})
        </div>

    </div>
</template>
<script>
import CheckBotton from 'components/content/checkButton/CheckButton'
export default {
    name:'CheckBottomBar',
    data() {
        return {
            
        }
    },
    props:{

    },
    methods: {
        checkAll(){
            // console.log("1");
            this.$store.commit('changeCheckState',this.isCheckAllCart);
        }
    },
    components:{
        CheckBotton
    },
    computed: {
        getCheckLength(){
            return this.$store.state.cartList.filter((item)=>{
                return item.check==true;
            })
        },
        getCartAllMoney(){
            
           return '￥'+this.getCheckLength.reduce((money,item,index)=>{
                return money+=item.count*item.price;
            },0).toFixed(2)
        },
        isCheckAllCart(){
            if(this.$store.state.cartList.length==0){
                return false;
            }
            return !this.$store.state.cartList.some((item,index)=>{
                    return item.check==false
            })
        },
        

    },
}
</script>
<style scoped>
    .check-bb{
        position: relative;
        
        height: 49px;
        width: 100%;
        background: rgb(236, 236, 236);
        display: flex;
        align-items: center;
    }
    .check-bb>div{
        /* height: 100%; */
        padding: 0 10px;
    }
    .check-all{
        width: 80px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .check-bb>div:nth-child(2){
        margin-right:auto ;
    }

</style>