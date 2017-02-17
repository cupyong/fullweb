import {commonHttpAction} from '../../common'
const _ = require('lodash');
//获取导航列表
export const fetchList = ({ commit },data) => {
    let defaultData ={
        path:"",
        page:1,
        pageSize:10,
        query:""
    }
    data = _.extend(defaultData, data);

    return commonHttpAction(commit,{
        url:data.path,
        query:data.query,
        sucessCode:'FETCH_LIST_SUCESS'
    })
}
