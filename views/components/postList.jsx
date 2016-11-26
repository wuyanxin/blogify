var React = require('react');
var moment = require('moment');

var PostItem = React.createClass({
  render: function() {
    let imgStyle = {
      backgroundImage: `url(${this.props.data.image})`,
    };
    let createdAt = moment(this.props.data.createdAt).format('YYYY-MM-DD');
    return (
      <li className="postItem">
        <div className="postInfo">
          <a href={'/' + this.props.data.slug}>
            <h2>{this.props.data.title}</h2>
          </a>
          <span>发表于 {createdAt}</span>
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
