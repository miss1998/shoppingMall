<template>
    <div class="mack">
        <div class="login">
        <div class="user-info">
            
        </div>
       <div>            
            账号：<input type="text" v-model="user.username">
       </div>
       <div>           
            密码：<input type="password" v-model="user.password">
       </div>
        <div class="login-start">
            <button @click="qingqiu">登录</button>
            <button>注册</button>
        </div>
    </div>
    </div>
</template>
<script>
import Cookie from 'js-cookie'
import {getUserInfo} from 'network/login'
import { request } from 'network/request'
    export default {
        name:"Login",
        data(){
            return {
                user:{
                    username:null,
                    password:null
                }
            }
        },
        methods:{
            qingqiu(){
                
                request({url:'/permission/getMenu',type:"post",data:this.user}).then(res=>{
                    // console.log(res);
                    if(res.data.code==20000)
                    {
                        // console.log(res.data.data.token);
                        Cookie.set('token', res.data.data.token)
                        this.$router.push({path:'/home',params:{}})
                    }else{
                        this.$toast.show('账号或密码错误！请重新输入',1000)
                    }
                },err=>{
                    // console.log(err);
                })
            },
            loginClick(){
                getUserInfo().then(res=>{
                    console.log(res);
                    if(res.data.code==20000)
                    {
                        console.log(res.data.data.token);
                        Cookie.set('token', res.data.data.token)
                        this.$router.push({name:'Home',params:{id:'1'}})
                    }
                },err=>{
                    // console.log(err);
                })
            }
        }

    }
</script>  
<style scoped>
    .mack{
        height: 100vh;
        width: 100vw;
        /* background: rgba(191, 170, 211,.4); */
    }
    .login{
       
       height: 100vh;
       width: 100vw;
        display :flex;
        flex-direction:column;
        justify-content:center;
        align-items :center;
       /* background: linear-gradient(45deg, #388ebd,#46c49f,#48a6dc); */
       background:url('~assets/img/login/jpg.jpg') no-repeat ;
       /* opacity: 1; */
       

    }
    .user-info{
        width: 60px;
        height: 60px;
        background: rgb(198 214 209);
        border-radius: 50%;
        transform: translateY(-20%);
    }
    .login input{
        
        margin: 10px 0;
        padding: 0 0 0 10px;
        border: solid 1px rgb(188, 190, 190);
       
        border-radius: 5px;
        background:rgb(232 226 216);
        height: 30px;
        

    }
    .login input:focus{
       
        background:transparent;
        outline-color: rgb(191, 170, 211);


    }
    .login-start{
        width: 75%;
        display: flex;
        justify-content: space-evenly;
    }
    
</style>