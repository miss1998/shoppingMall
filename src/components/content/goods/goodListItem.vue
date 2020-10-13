<template>
  <div class="goodsListItem" @click="itemClick">
    <img :src="showImage" alt="" @load="loadover" />
    <div class="Tfooter">
        <p>{{goodsItem.title}}</p>
        <span class="l">{{goodsItem.price}} </span><span class="r">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    loadover(){
      // console.log("touch");
      if(this.$route.path.indexOf('/home')!=(-1)){
        this.$bus.$emit('itemImgLoadOver')
      }else if(this.$route.path.indexOf('/detail')!=-1){
        this.$bus.$emit('detailImgLoadOver')
      }
    },
    itemClick(){
      this.$router.push('/detail/'+this.goodsItem.iid)
    },    
  },
  computed: {
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
};
</script>
<style scoped>
.goodsListItem {
  width: 47%;
  padding-bottom: 30px;
  margin: 10px 0;
  text-align: center;
}
.Tfooter{
  font-size: 12px;
  text-align: center;
}
img {
  width: 100%;
  height: 90%;
  border-radius: 8px;
}
p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 5px 0 5px ;
    
}
.l{

  color: var(--color-high-text);
}
 .Tfooter .r {
   margin-left: 20px;
    position: relative;
  }

  .Tfooter .r::before {
    content: '';
    font-size: 20px;
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>