import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
    loading: false,
    list:{topList:[],bodyList:[]},
    detail:{},
    addData:{},
    updataData:{},
    deleteData:{}
}

export default{
    state,
    actions,
    getters,
    mutations
}