
function* index() {
  let ctx = this;
  console.log(this.params);
  yield Post.findAll().then(posts => {
    console.log('result', posts);
    ctx.status = 200;
    yield ctx.render('index', { posts });
  });
}

module.exports = {
  index,
}
