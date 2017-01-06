module.exports  = {
    name:"用户",
    icon:"el-icon-picture",
    model:{
        name:{type : String, unique : true,rule:"required",showname:"姓名"},
        pwd:{type : String, rule:"required",showname:"密码"},
        status: {type : Number, default: Date.now},
        create_time     :{type : Date, default: Date.now},
        update_time     : {type : Date, default: Date.now}
    },
    premission:{
        //权限规则
    },
    search:{
        //页面头部配置
        //查询条件
    },
    refer:{
         //关联操作
        // post:
    },
    overiding:{
        //重写相关的增删改查功能
    },
    opbutton:{
        //页面中button 的配置项目
        edit:true,
        del:true
    }
}