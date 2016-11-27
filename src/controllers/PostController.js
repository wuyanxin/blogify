
let PostService = require('../services/PostService');

function* postPage () {
  let ctx = this;
  let slug = ctx.params.slug;

  let post = yield Post.findOne({
    where: { slug },
  });

  if (!post) {
    ctx.status = 404;
    ctx.body = '文章不存在';
    return;
  }

  ctx.status = 200;
  yield ctx.render('page/post', { post });
}

function* getList() {
  let ctx = this;
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
  create,
  postPage,
}
