let React = require('react');

let DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>Blogify</title>
          <meta name="viewport" content="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no" />
          <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/css/post.css" />
          <link rel="stylesheet" type="text/css" href="/css/social-icons.css" />
          <link rel="stylesheet" type="text/css" href="//cdn.bootcss.com/highlight.js/9.9.0/styles/atom-one-light.min.css" />

        </head>
        <body>
          <div className="container-fluid">

            <div className="row">
              {this.props.children}
            </div>

          </div>

          <script src="//cdn.bootcss.com/highlight.js/9.9.0/highlight.min.js"></script>
          <script>hljs.initHighlightingOnLoad();</script>
        </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;
