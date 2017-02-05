/**
 * 主题区域的类别导航条
 */

var React = require('react');

var TopNav = React.createClass({
  render: function () {
    let self = this;
    let categories = this.props.data;

    if (!categories || !Array.isArray(categories)) {
      return;
    }

    return (
      <ul className="topNav">
        {categories.map(function(item, index) {
          let activeClass = item.value === self.props.category ? 'active' : '';
          return (
            <li key={index} className={activeClass}>
              <a href={item.url} target="_self">
                {item.name}
              </a>
            </li>
          );
        })}
        <li><a href="https://github.com/wuyanxin/blogify" target="_blank">Blogify</a></li>
      </ul>
    )
  }
});

module.exports = TopNav;
