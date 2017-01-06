import vue from 'vue'

export const commonHttpAction = (commit ,data) => {
    let _url = `http://localhost:3333${data.url}`
    if(!data.method){
        data.method = 'get'
    }
    if(data.loading){
        commit('START_LOADING')
    }
    if(data.query){
        var searchParams=''
        if(typeof(data.query) == 'object' && Object.prototype.toString.call(data.query).toLowerCase() == '[object object]'
            && !data.query.length){
            searchParams = Object.keys(data.query).map((key) => {
                    return encodeURIComponent(key) + '=' + encodeURIComponent(data.query[key])
                }).join('&')
        }
        if(_url.indexOf('?')>1){
            _url = _url+'&'+searchParams
        }else{
            _url = _url+'?'+searchParams
        }
    }
    if (data.method == 'get'||data.method=='head'||data.method=='delete'||data.method=='jsonp') {
        return vue.http[data.method](_url)
                .then((res) => {
                if (res.status >= 200 && res.status < 300) {
            return res.data
        }
        return Promise.reject(new Error(res.status))
    }).then((json) => {
            if(data.loading){
            commit('FINISH_LOADING')
        }
        if (json.code === 0) {
            return commit(data.sucessCode, json.data)
        }
        return Promise.reject(new Error('fetchFilmsLists failure'))
    })
    .catch((error) => {
            // commit('FETCH_TOPIC_LISTS_FAILURE', topicTab, page)
            return Promise.reject(error)
        })
    }
    if (data.method == 'post'||data.method=='put'||data.method=='patch'){
        return vue.http[data.method](_url,data.body)
                .then((res) => {
                if (res.status >= 200 && res.status < 300) {
            return res.data
        }
        return Promise.reject(new Error(res.status))
    }).then((json) => {
            if(data.loading){
            commit('FINISH_LOADING')
        }
        if (json.code === 0) {
            return commit(data.sucessCode, json.data)
        }
        return Promise.reject(new Error('fetchFilmsLists failure'))
    })
    .catch((error) => {
            return Promise.reject(error)
        })
    }
}