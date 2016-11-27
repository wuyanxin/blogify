
// get the default category from APPConfig
let defaultNav = AppConfig.topNav && AppConfig.topNav[0] || {};
const defaultCategory = defaultNav.category || '';

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

module.exports = {
  index,
  category,
};
