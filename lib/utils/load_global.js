'use strict'
let  whole =global||window
//转换成驼峰的命名写法
whole.toCamel = function (name) {
    name = name.replace(/\-(\w)/g, function (x) {
        return x.slice(1).toUpperCase();
    });
    return name
};
//驼峰转下划线写法
whole.toUnderLine = function (name) {
    name = name.replace(/([A-Z])/g,"_$1").toLowerCase();
    return name
}
whole._ = require('lodash');