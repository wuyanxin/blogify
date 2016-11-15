var React = require('react');
var DefaultLayout = require('./layouts/default');
 
var HelloMessage = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <div>nav</div>
        <div>
          body
          <subnav />
          <postList /> or <postDetails />
          <footer />
        </div>
      </DefaultLayout>
    );
  }
});
 
module.exports = HelloMessage;