
const bcrypt = require('bcrypt');

function* init() {
  let admin = yield Admin.findOne();
  if (admin) {
    this.status = 404;
    this.body = '您已经初始化完成，请尝试登陆';
    return;
  }

  yield this.render('page/init');
}

function* register() {
  let { name, email, password } = this.request.body;
  let admin = yield Admin.create({ name, email, password });
  console.log('new admin', admin);
  this.status = 200;
  this.body = '管理员新建成功';
}

function* loginPage() {
  yield this.render('page/login');
}

function* login() {
  let { email, password } = this.request.body;
  let admin = yield Admin.findOne({ email });
  if (admin) {
    let pwCheck = yield bcrypt.compare(password, admin.password);
    if (pwCheck) {
      this.session.admin = admin;
      this.redirect('/admin');
      return;
    }
  }

  this.status = 400;
  this.body = '邮箱或密码错误';
}

module.exports = {
  init,
  register,
  loginPage,
  login,
};
