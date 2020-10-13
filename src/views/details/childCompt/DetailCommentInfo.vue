<template>
    <div v-if="Object.keys(commentInfo).length!==0" class="comment-info">
        <div class="info-header">
            <div>用户评价</div>
            <div>更多<i></i></div>
        </div>
        <div class="info-user">
            <img :src="commentInfo.user.avatar" alt="">
            <span>{{ commentInfo.user.uname }}</span>
        </div>
        <div class="info-detail">
            
            <p>{{ commentInfo.content }}</p>
            <div class="info-other">
                <span>{{ commentInfo.created | showTime}}</span>
                <span>{{ commentInfo.style }}</span>
            </div>
            <div class="info-imgs" >
                <img :src="item" alt="" v-for="(item,index) in commentInfo.images" :key="index">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"DetailCommentInfo",
    props:{
        commentInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters:{
        showTime(timer){
            var t=new Date(timer*1000);
            return `${t.getFullYear()}-${t.getMonth()}-${t.getDay()}  ${t.getHours()}: ${t.getMinutes()}: ${t.getSeconds()}   `; 
        }
    }
}
</script>
<style scoped>
    .comment-info{
        display: flex;
        flex-direction: column;
    }
    .info-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        font-size:.9em;
    }
    .info-user{
        height: 60px;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 0.9em;
        color: #000;
    }
    .info-user img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 0 10px;
    }
    .info-detail{
        font-size: 0.9em;
        line-height: 30px;
    }
    .info-other{
        font-size: 14px;
        height: 30px;
        line-height: 30px;
    }
    .info-imgs img{
        width: 70px;
        height: 70px;
    }
</style>