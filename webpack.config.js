if(process.env.NODE_ENV === 'production'){
    module.exports = require('./vue2_client/webpack.config.prod')
}else{
    module.exports = require('./vue2_client/webpack.config.dev')
}