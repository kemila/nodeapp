const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();
// 导入controller middleware:
const controller = require('./controllers/controllers');

const app = new Koa();

app.use(bodyParser());

// 使用middleware:
app.use(controller());

app.use(router.routes());

app.listen(3000);
console.log('listening on port 3000')