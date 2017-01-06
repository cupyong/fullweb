'use strict'
const path = require('path');
const fs = require('fs');
require('../../lib/utils/load_global.js')
let dir = fs.readdirSync(__dirname + '/../../lib/models');
let model_Paths=[];
for (let i = 0; i < dir.length; i++) {
    if (path.extname(dir[i]) !== '.js') continue;
    let name = (toCamel(path.basename(dir[i], '.js')).replace('Model', '')).toLowerCase()
    let model_path="";
    model_path += '  '+' {\n';
    model_path +='     ' + 'path:\''+name+'\',\n';
    model_path +='     ' + 'component: require(\'./components/Common/content.vue\'),\n';
    model_path +='     ' + 'alias: \'/'+name+'\'\n';
    model_path += '  '+' }\n';
    model_Paths.push(model_path)
}
let model_router = '';
model_router += '\'use strict\';\n\n';
model_router += 'module.exports=[\n';
model_router+=model_Paths.join(',')
model_router += ']';
fs.writeFileSync(__dirname + '/../src/model_router.js', model_router);

