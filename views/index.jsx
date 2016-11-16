var React = require('react');
var DefaultLayout = require('./layouts/default');
var PostList = require('./components/postList'); 
 
var Homepage = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title} >
        <div>nav</div>
        <div>
          <PostList posts={this.props.posts} />
        </div>
      </DefaultLayout>
    );
  }
});
 
module.exports = Homepage;