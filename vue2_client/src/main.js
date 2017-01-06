import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './vuex/store'
import FastClick from 'fastclick'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './routers'

window.addEventListener('load', () => {
    FastClick.attach(document.body)
})
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)
router.afterEach(function (transition) {
    if(transition.name){
        document.title = transition.name
    }
})
const app = new Vue({
        store,
        router,
        render: h => h(App)
})
app.$mount('#app')