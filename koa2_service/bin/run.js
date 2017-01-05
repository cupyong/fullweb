
var current_path = process.cwd();
// console.log(current_path)
require('../../lib/utils/load_global.js')
require('./../src/load_global.js')
require('runkoa')(current_path + '/koa2_service/src/koa_init.js' )