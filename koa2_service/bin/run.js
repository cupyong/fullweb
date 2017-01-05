var current_path = process.cwd();
// console.log(current_path)
require('runkoa')(current_path + '/koa2_service/app.js' )