'use strict'

const path = require('path');
const fs = require('fs');
require('../../lib/utils/load_global.js')
let dir = fs.readdirSync(__dirname + '/../../lib/models');
let model_Paths=[];
let menuJosn=[];

for (let i = 0; i < dir.length; i++) {
    if (path.extname(dir[i]) !== '.js') continue;
    let name = (toCamel(path.basename(dir[i], '.js')).replace('Model', '')).toLowerCase()
    //views

    let views_content=`<template>
    <div>
       <search_top :model.sync="model"></search_top>
       <table_content :model.sync="model"></table_content>
   </div>
</template>
<script>
    import table_content from '../../components/Common/content.vue'
     import search_top from '../../components/Common/searchtop.vue'
    export default {
        data() {
            return {
                model: '${name}'
            }
        },
        components: { table_content,search_top},
      }
</script>`

    fs.writeFileSync(__dirname + `/../src/views/model_view/${name}.vue`, views_content);

    //路由
    let model_path="";
    model_path += '  '+' {\n';
    model_path +='     ' + 'path:\''+name+'\',\n';
    model_path +='     ' + 'component: require(\'./views/model_view/'+name+'.vue\'),\n';
    model_path +='     ' + 'alias: \'/'+name+'\'\n';
    model_path += '  '+' }\n';
    model_Paths.push(model_path);



    //导航
    let modelSehema = require(__dirname + '/../../lib/models/' + dir[i])
    let menu="";
    menu += '  '+' {\n';
    menu +='     ' + 'name:\''+modelSehema.name+'\',\n';
    menu +='     ' + 'router:\''+name+'\',\n';
    menu +='     ' + 'icon:\''+modelSehema.icon+'\',\n';
    menu +='     ' + 'model:\''+modelSehema.name+'\',\n';
    menu += '  '+' }\n';
    menuJosn.push(menu)


}

let model_router = '';
model_router += '\'use strict\';\n\n';
model_router += 'module.exports=[\n';
model_router+=model_Paths.join(',')
model_router += ']';
fs.writeFileSync(__dirname + '/../src/model_router.js', model_router);


let model_menu = '';
model_menu += '\'use strict\';\n\n';
model_menu += 'module.exports=[\n';
model_menu+=menuJosn.join(',')
model_menu += ']';
fs.writeFileSync(__dirname + '/../src/menu.js', model_menu);

