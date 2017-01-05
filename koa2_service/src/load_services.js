'use strict'


const CODE_SUCCESS = 200;
const CODE_SYS_ERR = 500;
const CODE_LOGIC_ERR = 520;

function succ(data){
    return {
        code : CODE_SUCCESS,
        data : data
    }
}

function logic_err(errMsg){
    return {
        code : CODE_LOGIC_ERR,
        msg  : errMsg,
        data : errMsg
    }
}

const middlewareFun = async function(ctx, next, options) {
    options = options || {}
    let type = "";
    if (options.method) {
        type = options.method
    } else {
        type = ctx.method;
    }
    let statusWhere={status : 1}
    if(options.nostatus){
        statusWhere={}
    }
    let body = ctx.request.body;
    let id = ctx.params.id;
    let result=""

    if(options.refer){

    }
    if(options.before){
        //todo 如果操作前需求做其它处理待完善
    }

    switch (type.toLowerCase()){
        case "get":
            // 获取单个详情
            if(ctx.params.id){
                let condition = ctx.query || {};
                if(condition.userId){
                    delete condition.userId
                }
                condition = _.assign({_id:ctx.params.id}, statusWhere);
                result = await models[options.model].findOne(condition).populate(options.model);
            }else{  //获取列表
               const pageSize = ctx.query.pageSize || 20
                let limit =parseInt(pageSize) ;
                let page = parseInt(ctx.query.page || 1)
                let skip =  parseInt((page - 1) * parseInt(pageSize))
                let condition = ctx.query || {};
                if(condition.userId){
                    delete condition.userId
                }
                if(condition.page)  {
                    delete condition.page
                }
                if(condition.pageSize) {
                    delete condition.pageSize
                }
                if(condition.all){
                    delete condition.all
                }

                let where={}
                //todo 需要完善
                for(let item in condition){
                    if(options.where){
                        switch (options.where[item]){
                            case "like":
                                where[item]=new RegExp(condition[item])
                                break;
                            case "gt":
                                break
                            case "lt":
                                break
                            case "between":
                                break
                            default:
                                where[item]= condition[item]
                        }
                    }else {
                        where[item]= condition[item]
                    }

                }
                 where = _.assign(where, statusWhere);


                if(ctx.query.all||options.all){
                    result = await models[options.model].find(where).populate(options.model);
                }else {
                  result = await models[options.model].find(where).populate(options.model).skip(skip).limit(limit);
                }
            }
            break;
        case "post":
            //新增详情
            if(!body.status&&body.status!==0){
                body.status=1;
            }
            body.create_time=new Date()
            if(body.pwd){
                body.pwd = MD5(body.pwd);
            }
            result = await new models[options.model](body).save();
            break;
        case "put":
            //修改详情
            body.update_time = new Date();
            if(body.pwd){
                body.pwd = MD5(body.pwd);
            }else{
                delete body.pwd
            }
            await  models[options.model].update({_id : id}, {$set:body});
            result = 'OK';
            break;
        case "delete":
            await  models[options.model].remove({_id : id});
            result = 'OK';
            //删除
            break;
    }
    if(options.after){
        options.after.apply(this,[id,body,result])
    }
    return result;
}


module.exports = _.curryRight(async function (ctx, next) {
    try{
        let resultData = await middlewareFun.apply(this, arguments);
        ctx.body = succ(resultData);
    }catch (err){
        ctx.body = logic_err(err.message || err);
    }
});