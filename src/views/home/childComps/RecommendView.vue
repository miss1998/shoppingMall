<template>
    <div class="recommend">
        <div class="recommend-item" v-for="(item ,i) in recommends" :key="i"> 
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>
                    {{item.title}}
                </div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:"",
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>
    .recommend{
        display: flex;
        font-size: 12px;
        width: 100%;
        text-align: center;
        padding: 0 0 20px 0;
        border-bottom: 7px solid #eee;
    }
    .recommend-item{
        flex: 1;
    }
    .recommend-item img{
        width: 70px;
        height: 70px;
        margin: 10px 0 10px;
    }
</style>