import Vue from 'vue'
import Vuex from'vuex'


Vue.use(Vuex)


const store=new Vuex.Store({
    state:{
        cartList:[],

    },
    mutations:{
        addCount(state,payload){
            payload.count++;
            state.cartList= state.cartList.slice(0);
        },
        addToCart(state,payload){
            payload.check=false  ;             
            state.cartList.push(payload)
            state.cartList= state.cartList.slice(0);
        },
        changeCartInfo(state,payload){
            let targetIndex=state.cartList.findIndex((item)=>{
                return item.iid===payload;
            });
            let target=state.cartList[targetIndex];
            target.check=!target.check;
            state.cartList= state.cartList.slice(0);            
        },
        changeCheckState(state,payload){
            state.cartList=state.cartList.map((item,index)=>{
                item.check=!payload;
                return item
            }).slice(0)
            
            
        }
    },
    actions:{
        addCart(context,payload){
            
            let addcart=context.state.cartList.find((item)=>{
                return item.iid===payload.iid;
            })

            // console.log(addcart);

            if(addcart){
                // console.log(addcart);              
                context.commit('addCount',addcart)
            }else{  
                payload.count=1; 
                
                context.commit('addToCart',payload);                
            }
            // console.log(addcart);
            
        }
    },    
    getters:{
        cartLength(state){
            return state.cartList.length;
        },
        cartList(state){
            // console.log(state.cartList);
            return state.cartList;
        }
    },
    modules:{

    }
})
export default store