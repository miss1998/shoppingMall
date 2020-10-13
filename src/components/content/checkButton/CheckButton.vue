<template>
    <div class="checkButton"  :class="{isActive:check }">
        <img src="~assets/img/cart/tick.svg" alt="">
    </div>
</template>
<script>
export default {
    name:"CheckButton",
    data() {
        return {
            
        }
    },
    props:{
        check:{
            type:Boolean,
            default:false
        }
    }

}
</script>
<style scoped>
    .checkButton{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: solid 1px rgb(0, 0, 0);
    }
    .isActive{
        background: rgb(207, 33, 33);
    }
    .checkButton img{
        width: 100%;
        height: 100%;
        /* background: rgb(95, 80, 64); */
    }
</style>