const React = require('react');
const DefaultLayout = require('../layouts/default');

const Init = React.createClass({
  render: function () {
    return (
      <DefaultLayout>
        <div className="adminLogin">
          <form method="post" action="/login" className="form">
            <div className="form-group">
              <label for="loginEmail">Email</label>
              <input type="email" className="form-control" name="email" id="loginEmail" placeholder="Email" />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" className="form-control" name="password" id="loginPassword" placeholder="Password" />
            </div>
            <input type="submit" value="登陆" className="btn btn-primary pull-right"/>
          </form>
        </div>
      </DefaultLayout>
    );
  },
});

module.exports = Init;
