import BackTop from 'components/content/backTop/BackTop'
export const backtopMixin={
    data() {
        return {
            backTopShow:false,
        }
    },
    methods: {
        backClick(){
            console.log("click");
            this.$refs.top.scroll.scrollTo(0,0,300)
        }
    },
    components:{
        BackTop
    }
}