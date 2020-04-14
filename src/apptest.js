const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

// 数据库 
// const ModelDb = require('./db');

const app = new Koa();
app.use(bodyParser());

// log request URL:
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});
// 简单验证
router.get('/', async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
      <form action="/signin" method="post">
          <p>Name: <input name="name" value="koa"></p>
          <p>Password: <input name="password" type="password"></p>
          <p><input type="submit" value="Submit"></p>
      </form>`;
});

router.post('/signin', async (ctx, next) => {
  var
      name = ctx.request.body.name || '',
      password = ctx.request.body.password || '';
  console.log(`signin with name: ${name}, password: ${password}`);
  if (name === 'koa' && password === '12345') {
      ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
  } else {
      ctx.response.body = `<h1>Login failed!</h1>
      <p><a href="/">Try again</a></p>`;
  }
});

// 数据库连接测试
// app.use(async ctx => {
//   console.log('start:11111111');
//   const date = new Date();
//   await ModelDb.save({
//     title: '1111',
//     body: '2222',
//     date
//   });
//   let data = await ModelDb.query();
//   console.log('get:data' , data);
//   ctx.body = data;
// });

// 路由测试
// add router middleware:
app.use(router.routes());
app.listen(3000);
console.log('listening on port 3000')