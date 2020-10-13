<template>
    <div class="wrapper" ref='wrapper'>
        <div class="content">
            <slot></slot>
        </div>        
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name:'Scroll',
    data(){ 
        return{
            scroll:null,
            timer:null
        }
    },
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    methods: {
        finishPullUp(){
            this.scroll.finishPullUp()

        },
        refresh(){
            // console.log("2");
            this.scroll && this.scroll.refresh();
        }
    },
    mounted() {
        this.scroll=new BScroll(this.$refs.wrapper,{
            probeType:this.probeType,
            pullUpLoad: this.pullUpLoad,
            click:true
        }),
        this.scroll.on('scroll',(position)=>{
            if(this.timer==null){
                this.timer=setTimeout(() => {
                this.$emit('scroll',position);
                this.timer=null;
                },30);
            }
           
           
            // console.log(this.pullUpLoad);
        })
        this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp')
           
        })
    },
}
</script>