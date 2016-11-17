var React = require('react');
var DefaultLayout = require('./layouts/default');
var PostList = require('./components/postList'); 
var Nav = require('./components/nav'); 
 
var Homepage = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title} >
        <div className="sidebar col-md-3">
          <Nav config={this.props.config} />
        </div>

        <div className="body col-md-8 col-md-offset-3">
          <PostList posts={this.props.posts} />
        </div>
      </DefaultLayout>
    );
  }
});
 
module.exports = Homepage;