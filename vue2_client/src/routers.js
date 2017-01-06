import VueRouter from 'vue-router'
import model_router from './model_router'

let routes =[
    {
        path: '/',
        component: require('./views/index')
    },
    {
        path: '/list',
        name:'111',
        component:  require('./views/list')
    }
];
for(let i=0;i<model_router.length;i++){
    routes.push(model_router[i])
}
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes:routes
})
export default router