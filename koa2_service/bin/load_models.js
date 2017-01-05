//加载models
'use strict';
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let models = {};
let dir = fs.readdirSync(__dirname + '/../../lib');
//数据库转换成驼峰的命名写法
let toCamel = function (name) {
    name = name.replace(/\-(\w)/g, function (x) {
        return x.slice(1).toUpperCase();
    });
    return name
};
//驼峰转下划线写法
let toUnderLine = function (name) {
    name = name.replace(/([A-Z])/g,"_$1").toLowerCase();
    return name
}

for (let i = 0; i < dir.length; i++) {
    if (path.extname(dir[i]) !== '.js') continue;
    let name = toCamel(path.basename(dir[i], '.js')).replace('Model', '')
    console.log(toUnderLine(name))
    let schema = new Schema(require(__dirname + '/../../lib/' + dir[i]))
    let adminUser = mongoose.model(toUnderLine(name), schema);
    models[toCamel(path.basename(dir[i], '.js'))] = mongoose.model(toUnderLine(name));
}
module.exports = models;

