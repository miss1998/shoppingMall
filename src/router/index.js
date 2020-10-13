import Vue from "vue";
import VueRouter from "vue-router"
const Home =()=>import("@/views/home/Home.vue")
const Category =()=>import("@/views/category/Category.vue")
const Cart =()=>import("@/views/cart/Cart.vue")
const Profile =()=>import("@/views/profile/Profile.vue")
const Details=()=>import('@/views/details/Detail.vue')
const Login=()=>import('@/views/login/Login.vue')
Vue.use(VueRouter)
const routes=[
    {
        path:"",
        redirect:'/home'
    },
    {
        path:"/home",
        component: Home,
        
        // meta:""
    },
    {
        path:"/detail/:id",
        component: Details,
        // meta:""
    },
    {
        path:"/category",
        component:Category,
        // meta:""
    },
    {
        path:"/cart",
        component:Cart,
        // meta:""
    },
    {
        path:"/profile",
        component:Profile,
        // meta:""
    },
    {
        path:'/login',
        component:Login,
        name:"Login"
    },
]
const router=new VueRouter({
    routes,
    mode:"history"
})
export default router