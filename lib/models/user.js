module.exports  = {
    name:"用户",
    icon:"el-icon-picture",
    model:{  //存在showname的需要在列表中  显示存在showFun值需要转换
        name:{type : String, unique : true,rule:"required",showname:"姓名"},
        account:{type : String, rule:"required",showname:"账号"},
        status: {type : Number, default: Date.now,showname:"状态",showFun:"statusName"},
        create_time     :{type : Date, default: Date.now},
        update_time     : {type : Date, default: Date.now}
    },
    showFun:{   //showFun 用来根据值做相应的展示
        statusName:function (status) {
            return status
        }
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