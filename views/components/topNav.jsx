/**
 * 主题区域的类别导航条
 */

var React = require('react');

var TopNav = React.createClass({
  render: function () {
    let topNav = this.props.data;

    if (!topNav || !Array.isArray(topNav)) {
      return;
    }

    return (
      <ul className="topNav">
        {topNav.map(function(item, index) {
          return (
            <li key={index}>
              <a href={item.url} target={item.target === 'page' ? '_blank' : '_self'}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    )
  }
});

module.exports = TopNav;
