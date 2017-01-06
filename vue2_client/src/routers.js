import VueRouter from 'vue-router'
import model_router from './model_router'
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes:[
        {
            path: '/list',
            name:'111',
            component:  require('./views/list')
        },
        {
            path: '/admin', component: require('./views/index'),
            name:'22',
            children: model_router
        }
    ]
})
export default router