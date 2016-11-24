var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <div className="footer">
        Powered by <a href="https://github.com/wuyanxin/blogify">blogify</a>
      </div>
    );
  }
});

module.exports = Footer;
