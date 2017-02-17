import {
    START_LOADING,
    FINISH_LOADING,
    FETCH_LIST_SUCESS,
    FETCH_DETAIL_SUCESS,
    FETCH_POST_SUCESS,
    FETCH_DELETE_SUCESS,
    FETCH_PUT_SUCESS
} from './mutation-type'

const mutations = {
    [START_LOADING] (state) {
        state.loading = true
    },
    [FINISH_LOADING] (state) {
        state.loading = false
    },

    [FETCH_LIST_SUCESS] (state, data) {
        state.list = data.data
    },

    [FETCH_DETAIL_SUCESS] (state, data) {
        state.detail = data.data
    },

    [FETCH_POST_SUCESS] (state, data) {
        state.addData = data.data
    },

    [FETCH_PUT_SUCESS] (state, data) {
        state.updataData = data.data
    },
    
    [FETCH_DELETE_SUCESS] (state, data) {
        state.deleteData = data.data
    }
}
export default mutations