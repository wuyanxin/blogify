var React = require('react');
var moment = require('moment');

var PostImage = React.createClass({
  render: function () {
    let image = this.props.image;
    if (image) {
      let imgStyle = {
        backgroundImage: `url(${image})`,
      };
      return <div style={imgStyle} className="postImage"></div>;
    } else {
      return null;
    }
  },
});

var PostItem = React.createClass({
  render: function() {
    let createdAt = moment(this.props.data.createdAt).format('YYYY-MM-DD');
    return (
      <li className="postItem">
        <div className="postInfo">
          <a href={'/' + this.props.data.slug}>
            <h2>{this.props.data.title}</h2>
          </a>
          <span>发表于 {createdAt}</span>
        </div>

        <PostImage image={this.props.data.image} />
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
