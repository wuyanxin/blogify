
var React = require('react');
var moment = require('moment');
var PostLayout = require('../layouts/post');
let scripts = require('./../../configs/scripts');

var PostPage = React.createClass({
  render: function () {
    var post = this.props.post;
    let createdAt = moment(post.createdAt).format('YYYY-MM-DD');
    let content = { __html: post.content };

    return (
      <PostLayout title={post.title} >
        <main className="postMain col-md-6 col-md-offset-3">
          <article>
            <header>
              <h1 className="postTitle">{post.title}</h1>
              <span>发布时间: <time>{createdAt.toString()}</time></span>
            </header>

            <section dangerouslySetInnerHTML={content}>

            </section>

            <footer>

            </footer>
            
            <div className="ds-thread" data-thread-key={post.slug}
              data-title={post.title}></div>
          </article>
        </main>


        <div className="inserted-scripts"
          dangerouslySetInnerHTML={{ __html: scripts.afterPost }}>
        </div>
      </PostLayout>
    );
  },
});

module.exports = PostPage;
