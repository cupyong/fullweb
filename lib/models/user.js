module.exports  = {
    model:{
        name:{type : String, unique : true,rule:"required",showname:"姓名"},
        pwd:{type : String, unique : true,rule:"required",showname:"密码"},
        status:Number,
    },
    premission:{
        //权限规则
    },
    search:{
        //查询条件
    },
    refer:{
         //关联操作
        // post:
    },
    overiding:{
        //重写相关的增删改查功能
    }
}