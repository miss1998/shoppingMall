<template>
  <div class="goodList">
      <good-list-item  v-for="(item,i) in goods" :key="i" :goods-item="item"></good-list-item>
     
  </div>
</template>
<script>
import GoodListItem from "./goodListItem";
export default {
  name: "",
  components: {
    GoodListItem,
  },
  props:{
    goods:{
      type: Array,
      default(){
        return []
      },
    },
  },
};
</script>
<style scoped>
.goodList{
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
</style>