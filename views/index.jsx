var React = require('react');
var DefaultLayout = require('./layouts/default');
var PostList = require('./components/postList');
var Nav = require('./components/nav');
var TopNav = require('./components/topNav');
var Footer = require('./components/footer');

var Homepage = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title} >
        <div className="sidebar col-md-3">
          <Nav config={this.props.config} />
          {/* <Footer /> */}
        </div>

        <div className="main col-md-7 col-md-offset-3">
          <TopNav data={this.props.config.topNav} />
          <PostList posts={this.props.posts} />
        </div>
      </DefaultLayout>
    );
  }
});

module.exports = Homepage;
