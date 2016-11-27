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

  app.use(router.routes());

};
