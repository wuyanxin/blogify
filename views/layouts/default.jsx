var React = require('react');

var DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>Blogify</title>
          <meta name="viewport" content="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no" />
          <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/css/style.css" />
          <link rel="stylesheet" type="text/css" href="/css/social-icons.css" />

        </head>
        <body>
          <div className="container-fluid">

            <div className="row">
              {this.props.children}
            </div>

          </div>

        </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;
