var koa = require('koa');
var app = koa();

app.use(function *() {
  this.body = 'Yo, io.js!';
});

app.listen(3000);