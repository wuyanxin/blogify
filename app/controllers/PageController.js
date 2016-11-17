
function* index() {
  let posts = yield Post.findAll();
  this.status = 200;
  yield this.render('index', { posts, config: AppConfig });
}

module.exports = {
  index,
};
