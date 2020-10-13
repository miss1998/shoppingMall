<template>
    <div class="tab-bar">
        <slot></slot>
    </div>  
</template>
<script>
export default {
  name: 'TabBar',
  components: {
    
  }
}
</script>

<style scoped>
.tab-bar{
  display:flex;
  /* flex-direction: row; */
  /* flex-flow: column; */
   /* justify-content:flex-start;  */
  align-items: flex-start; 
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgb(194, 194, 193);
  box-shadow: 0 -1px 1px rgba(100,100,100,0.2) ;
}

</style>
