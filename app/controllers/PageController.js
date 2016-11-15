
function* index() {
  console.log(this.params);
  let posts = yield Post.findAll();
  console.log('result', posts);
  this.status = 200;
  yield this.render('index', { posts });
}

module.exports = {
  index,
};
