let router = require('koa-router')();
let koaBody = require('koa-body')();
let _ = require('lodash');
let fs = require('fs');
let path = require('path');

let middlewares = {};

function loadMiddlewares(app) {
  let mwDir = path.resolve(__dirname, '../middlewares/');
  let files = fs.readdirSync(mwDir);
  _.map(files, function (filename) {
    let middleware = require(`${mwDir}/${filename}`);
    middleware[filename] = middleware;
  });
}

module.exports = function (app) {

  loadMiddlewares(app);
  app.use(koaBody);

  let routes = require('../../configs/routes');

  _.map(routes, route => {
    let method = (route.method || 'get').toLowerCase();
    let action = require(`../controllers/${route.controller}`)[route.action];
    router[method](route.pattern, action);
  });

  // allow cors on development
  if (app.env === 'development') {
    app.use(function* (next) {
      this.set('Access-Control-Allow-Credentials', true);
      this.set('Access-Control-Allow-Origin', '*');
      this.set('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
      this.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
      yield next;
    });
    
    router.options('*', function* () {
      this.status = 204;
    });
  }

  app.use(router.routes());

};
