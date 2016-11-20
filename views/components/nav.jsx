var React = require('react');

var SNSLogo = React.createClass({
  render: function () {
    let logo = this.props.logo;
    let title = this.props.title;
    if (/^(http|https|\/\/)/.test(logo)) {
      return <img src={logo} alt={title} />;
    } else {
      return <span className={'socicon ' + logo} alt={title} />;
    }
  }
});

var Nav = React.createClass({
  render: function() {
    let { author, leftNav } = this.props.config;
    return (
      <nav>
        <div className="nav-header">
          <a className="nav-logo" href={this.props.config.url}>
            <img src={this.props.config.logo} alt={this.props.config.blogName} className="img-circle"/>
          </a>

          <h3 className="nav-author">
            {this.props.config.author.name}
          </h3>

          <ul className="nav-social">
            {author.sns.map(function(item, index) {
              return (
                <li key={index} className="nav-social-item">
                  <a rel="me" target="_blank" href={item.url}>
                    <SNSLogo logo={item.logo} title={item.title} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="nav-list">
          {leftNav.map(function(item, index) {
            return (
              <li key={index}>
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
