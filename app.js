/*
 * @Author: wuyanxin 
 * @Date: 2016-11-11 22:13:16 
 * @Last Modified by: wuyanxin<wyx.ethan@gmail.com>
 * @Last Modified time: 2016-11-12 16:58:21
 */
'use strict';

let koa = require('koa');
let app = koa();

// load config TODO

// load orm TODO
require('./app/core/ormLoader')(app);
console.log('after')

// load service TODO 

// load middlewares TODO

// x-response-time
app.use(function* (next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

// logger
app.use(function* (next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s %sms', this.method, this.url, this.status, ms);
});

// bind routes TODO
require('./app/core/routerBinder')(app);
console.log('router binded');

// bind statics
app.use(require('koa-static')('./www'));

console.log(app.env)

app.listen(3000);
