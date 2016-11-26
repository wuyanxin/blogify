
var React = require('react');
var moment = require('moment');
var DefaultLayout = require('../layouts/default');

var PostPage = React.createClass({
  render: function () {
    var post = this.props.post;
    let createdAt = moment(post.createdAt).format('YYYY-MM-DD');
    let content = { __html: post.content };

    return (
      <DefaultLayout title={post.title} >
        <main className="postMain col-md-6 col-md-offset-3">
          <article>
            <header>
              <h1>{post.title}</h1>
              <span>发布时间: <time>{createdAt.toString()}</time></span>
            </header>

            <section dangerouslySetInnerHTML={content}>

            </section>

            <footer>

            </footer>
          </article>
        </main>
      </DefaultLayout>
    );
  },
});

module.exports = PostPage;
