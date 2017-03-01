import {
    START_LOADING,
    FINISH_LOADING,
    FETCH_LIST_SUCESS,
    FETCH_DETAIL_SUCESS,
    FETCH_POST_SUCESS,
    FETCH_DELETE_SUCESS,
    FETCH_PUT_SUCESS
} from './mutation-type'

import models from '../../../../../lib/models/index'
const mutations = {
    [START_LOADING] (state) {
        state.loading = true
    },
    [FINISH_LOADING] (state) {
        state.loading = false
    },
    [FETCH_LIST_SUCESS] (state, data) {
        let model= models[data.model]
        let topList=[];
        let bodyList=[];
        
        for(let item in model.model){
           if(model.model[item].showname){
               topList.push(model.model[item].showname)
           }
        }
       
        for(let i=0;i<data.data.length;i++){
             let tdList =[]
             console.log(model.model)
             for(let item in model.model){
                if(model.model[item].showname){
                    let showValue = data.data[i][item]
                    if(model.model[item].showFun){
                         showValue =model.showFun[model.model[item].showFun](showValue)
                    }
                    tdList.push(showValue)
                  }
             }
             bodyList.push(tdList)
        }
       state.list ={
            topList:topList,
            bodyList:bodyList
        }
     },
    [FETCH_DETAIL_SUCESS] (state, data) {
        state.detail = data
    },

    [FETCH_POST_SUCESS] (state, data) {
        state.addData = data
    },

    [FETCH_PUT_SUCESS] (state, data) {
        state.updataData = data
    },

    [FETCH_DELETE_SUCESS] (state, data) {
        state.deleteData = data
    }
}
export default mutations