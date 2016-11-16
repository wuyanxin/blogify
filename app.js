/*
 * @Author: wuyanxin 
 * @Date: 2016-11-11 22:13:16 
 * @Last Modified by: wuyanxin
 * @Last Modified time: 2016-11-16 08:21:36
 */
'use strict';

require("babel-register");
let koa = require('koa');
let render = require('koa-ejs');
let path = require('path');

let app = koa();

// render(app, {
//   root: path.join(__dirname, './app/views'),
//   layout: 'default',
//   viewExt: 'html',
//   cache: app.env === 'production',
//   debug: app.env !== 'production'
// });

require('koa-react-views')(app, {
  viewExt: '.jsx',
  root: path.join(__dirname, './views'),
  transformViews: false
});

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
