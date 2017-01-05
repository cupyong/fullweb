var router = require('koa-router')();

router.get('/', async function (ctx, next) {
    ctx.body ={
        a:1
    }

})
module.exports = router;
