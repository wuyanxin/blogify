
let PostService = require('../services/PostService');

/**
 * 文章详情页
 */
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
  if (post.type === 'page') {
    return yield ctx.render('page/customPage', { post });
  }
  yield ctx.render('page/post', { post });
}

/**
 * 全部文章（后台使用）
 */
function* getList() {
  let ctx = this;
  yield Post.findAll({ order: 'id desc' }).then(result => {
    ctx.body = {
      code: 200,
      data: result,
    };
    ctx.status = 200;
  });
}

/**
 * 文章详情 （后台使用）
 */
function* getPost() {
  let ctx = this;
  yield Post.findById(this.params.id).then(result => {
    ctx.body = {
      code: 200,
      data: result,
    };
    ctx.status = 200;
  });
}

/**
 * 创建文章
 */
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

/**
 * 更新文章
 */
function* update() {
  let ctx = this;
  let body = this.request.body;
  yield PostService.update(body).then(updated => {
    ctx.body = {
      code: 200,
      data: updated,
    };
  });
}

module.exports = {
  getList,
  getPost,
  create,
  postPage,
  update,
}
