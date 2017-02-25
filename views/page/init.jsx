const React = require('react');

const Init = React.createClass({
  render: function () {
    return (
      <div className="initAdmin">
        <form method="post" action="/register">
          用户名：<input name="name" /><br/>
          邮箱：<input name="email"/><br/>
          密码：<input type="password" name="password"/><br />
          <input type="submit" value="注册"/>
        </form>
      </div>
    );
  },
});

module.exports = Init;
