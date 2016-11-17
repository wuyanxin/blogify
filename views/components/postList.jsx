var React = require('react');

var PostItem = React.createClass({
  render: function() {
    return (
      <li>
        <h2>{this.props.data.title}</h2>
        <img src={this.props.data.image} width="300px"/>
      </li>
    );
  }
});

var PostList = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.posts.map(function(post) {
           return <PostItem data={post} />;
        })}
      </ul>
    );
  }
});

module.exports = PostList;
