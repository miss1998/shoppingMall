<template >
    <div class="toast"  v-show="isShow">
        <div>
            {{ message }}
        </div>
    </div>
</template>
<script>
    export default {
        name:"Toast",
        data(){
            return {
                message:'',
                isShow:false,
            }
        },
        methods:{
            show(msg='操作成功',timer=1000){
                    this.message=msg;
                    this.isShow=true;
                    setTimeout(()=>{
                        this.isShow=false;
                    },timer)
            }
        }
    }
</script>
<style >
    .toast{
        position: fixed;
        width: 200px;
        height: 50px;
        left: 50%;
        top: 50%;
        border-radius: 7px;
        transform: translate(-50%,-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99;
        color: black;
        background: chocolate;
    }
</style>