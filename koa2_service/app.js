'use strict'
const Koa = require('koa');
const json = require('koa-json');
const convert = require('koa-convert');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');
const router = require('koa-router')();

const app = new Koa();

app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));

app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

//根据models生成router
var models=["user",'admin']
for(let i=0;i<models.length;i++){
    let  routerModel = require('koa-router')();
    routerModel.get('/', async function (ctx, next) {
        ctx.body ={
            a:models[i]
        }

    })
    router.use('/'+models[i], routerModel.routes(), routerModel.allowedMethods());
}

router.use('/', index.routes(), index.allowedMethods());

app.use(router.routes(), router.allowedMethods());

app.on('error', function(err, ctx){
    console.log(err)
    logger.error('server error', err, ctx);
});

app.listen(3000);