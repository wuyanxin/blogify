var React = require('react');

var Nav = React.createClass({
  render: function() {
    let { author, leftNav } = this.props.config;
    return (
      <nav>
        <div className="nav-header">
          <a className="nav-logo" href={this.props.config.url}>
            <img src={this.props.config.logo} alt={this.props.config.blogName} className="img-circle"/>
          </a>
          
          <ul className="nav-social pull-right">
            {author.sns.map(function(item) {
              return (
                <li>
                  <a rel="me" target="_blank" href={item.url}>
                    <img src={item.logo} alt={item.title} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="nav-list">
          {leftNav.map(function(item) {
            return (
              <li>
                <a href={item.url} target={item.target || '_self'}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
});

module.exports = Nav;
