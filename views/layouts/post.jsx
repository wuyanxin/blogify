var React = require('react');

var DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>Blogify</title>

          <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/css/post.css" />
          <link rel="stylesheet" type="text/css" href="/css/social-icons.css" />
          <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Merriweather:300,700,700italic,300italic|Open+Sans:700,400" />
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
