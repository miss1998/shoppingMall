import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import store from './store/index'
import Toast from './components/common/toast/index'
import './mock'
import  FastClick  from  'fastclick'



FastClick.attach(document.body);
Vue.config.productionTip = false
// axios.defaults.baseURL="http://123.207.32.32:8080";
// axios.defaults.timeout=2000;
Vue.prototype.$bus=new Vue();
Vue.use(Toast);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
