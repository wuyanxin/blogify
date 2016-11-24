var React = require('react');

var PostItem = React.createClass({
  render: function() {
    let imgStyle = {
      backgroundImage: `url(${this.props.data.image})`,
    };
    return (
      <li className="postItem">
        <div className="postInfo">
          <h2>{this.props.data.title}</h2>
          <span>{this.props.data.createdAt.toString()}</span>
        </div>
        <div style={imgStyle} className="postImage"></div>
      </li>
    );
  }
});

var PostList = React.createClass({
  render: function() {
    return (
      <ul className="postList">
        {this.props.posts.map(function(post, index) {
           return <PostItem data={post} key={index}/>;
        })}
      </ul>
    );
  }
});

module.exports = PostList;
