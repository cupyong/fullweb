import Vue from 'vue'
import Vuex from 'vuex'
// import article from './modules/article'
import app from './modules/app/index.js'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
    modules: {
        app
    },
    strict: debug
})