const router = require('koa-router')();
//根据models生成router
const path = require('path');
const fs = require('fs');
const services= require('./load_services');
let dir = fs.readdirSync(__dirname + '/../../lib/models');
for (let i = 0; i < dir.length; i++) {
    if (path.extname(dir[i]) !== '.js') continue;
    let name = (toCamel(path.basename(dir[i], '.js')).replace('Model', '')).toLowerCase()
    let  routerModel = require('koa-router')();
    routerModel.get('/', services({model:'user'}))

    routerModel.get('/:id',services({model:'user'}));

    routerModel.post('/',services({model:'user'}));

    routerModel.put('/:id',services({model:'user'}));

    routerModel.delete('/:id',services({model:'user'}));

    router.use('/'+name, routerModel.routes(), routerModel.allowedMethods());
}
module.exports = router;

