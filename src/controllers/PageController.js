
const fs = require('fs');

// get the default category from APPConfig
const defaultNav = AppConfig.categories && AppConfig.categories[0] || {};
const defaultCategory = defaultNav.value || '';

/**
 * 首页
 */
function* index() {
  let query = { where: {} };

  if (defaultCategory) {
    query.where.category = defaultCategory;
  }

  let posts = yield Post.findAll(query);
  this.status = 200;
  yield this.render('index', {
    posts,
    config: AppConfig,
    category: query.where.category
  });
}

/**
 * 根据类别筛选文章
 */
function* category() {
  let category = this.params.category;

  if (!category) {
    this.stauts = 404;
    return;
  }

  let posts = yield Post.findAll({
    where: { category }
  });

  this.status = 200;
  yield this.render('index', {
    posts,
    config: AppConfig,
    category,
  });

}

function* admin() {
  if (!this.session.admin) {
    this.redirect('/admin/login');
    return;
  }
  this.response.status = 200;
  this.response.type = 'text/html';
  this.body = fs.createReadStream(`${process.cwd()}/admin/dist/index.html`);
}

module.exports = {
  index,
  category,
  admin,
};
