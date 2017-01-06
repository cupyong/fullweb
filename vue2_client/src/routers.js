import VueRouter from 'vue-router'
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: require('./views/index')
        },
        {
            path: '/list',
            name:'111',
            component:  require('./views/list')
        }

    ]
})
export default router