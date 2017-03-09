/*
 * @Author: wuyanxin
 * @Date: 2016-11-11 22:13:16
 * @Last Modified by: wuyanxin
 * @Last Modified time: 2017-03-09 15:20:00
 */
'use strict';

require("babel-register");
const koa = require('koa');
const path = require('path');
const session = require('koa-session');

const app = koa();
global.AppConfig = require('./config.js');

require('koa-react-views')(app, {
  viewExt: '.jsx',
  root: path.join(__dirname, './views'),
  transformViews: false
});

// load orm TODO
require('./src/core/ormLoader')(app);
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

// session
app.keys = AppConfig.session.secret;
app.use(session(AppConfig.session, app));

// bind routes TODO
require('./src/core/routerBinder')(app);
console.log('router binded');

// bind statics
app.use(require('koa-static')('./www'));

console.log(app.env)

app.listen(3000);
