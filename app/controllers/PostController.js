
let PostService = require('../services/PostService');

function* getList() {
  let ctx = this;
  console.log(this.params);
  yield Post.findAll().then(result => {
    console.log('result', result);
    ctx.body = {
      code: 200,
      data: result,  
    };
    ctx.status = 200;
  });
}

function* getPost() {
  let ctx = this;
  console.log(this.params);
  yield Post.findById(this.params.id).then(result => {
    console.log('result', result);
    ctx.body = {
      code: 200,
      data: result,  
    };
    ctx.status = 200;
  });
}

function* create() {
  console.log(this.request.body);
  let ctx = this;
  this.body = this.request.body;
  yield PostService.create(this.body).then(created => {
    ctx.body = {
      code: 200,
      data: created
    };
  });
}

module.exports = {
  getList,
  getPost,
  create
}
