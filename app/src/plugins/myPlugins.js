//Vue插件一定暴露一个对象
let myPlugins={};
myPlugins.install=function(Vue,option){
    Vue.directive(option.name,(element,b)=>{
        console.log(b);
    })
}
export default myPlugins;