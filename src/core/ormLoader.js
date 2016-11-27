
let _ = require('lodash');
let fs = require('fs');
let path = require('path');

function connectDB(app) {
  app.db = require('../../configs/db');
  console.log('db connected');
}

module.exports = function (app) {
  connectDB(app);

  let modelDir = path.resolve(__dirname, '../models/');
  let files = fs.readdirSync(modelDir);
  app.models = {};

  _.map(files, function (filename) {
    let model = require(`${modelDir}/${filename}`);
    let modelName = filename.split('.').shift();
    app.models[model.name] = app.db.define(model.name, model.attributes, model.options);
    global[modelName] = app.models[model.name];
  })
  app.db.sync();
  console.log('db sync');
}
