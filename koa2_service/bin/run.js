
var current_path = process.cwd();
// console.log(current_path)
require('../../lib/utils/load_global.js')
require('./load_global.js')
require('runkoa')(current_path + '/koa2_service/bin/koa_init.js' )