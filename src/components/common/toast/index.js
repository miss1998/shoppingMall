import Toast from './Toast'
const obj={};
obj.install=function(Vue){
    // 1.创建组件构造器
    let toastConstruct= Vue.extend(Toast);
    //2.new 的方式，根据组件构造器，创建一个组件对象出来
    let toast=new toastConstruct();
    //3.将组件挂载到元素上，这里可以利用document.create创建一个标签  然后插入body
    toast.$mount(document.createElement('div'));
    //toast.$el对应的就是div  将div插在页面上  就可以全局使用了
    document.body.appendChild(toast.$el)
    //放入VUE原型中  使用vue时就可直接使用当前构造的模板
    Vue.prototype.$toast=toast;
    // console.log("jiaruyuanxing");
}
export default obj;