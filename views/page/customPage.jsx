const React = require('react');
const DefaultLayout = require('../layouts/default');
const Nav = require('../components/nav');
const TopNav = require('../components/topNav');
const Footer = require('../components/footer');
const AppConfig = require('../../config.js');
const post_after_script = require('../../config').post_after_script;

var CustomPage = React.createClass({
  render: function() {
    var post = this.props.post;
    let content = { __html: post.content };

    return (
      <DefaultLayout title={this.props.title} >
        <div className="sidebar col-md-3">
          <Nav config={AppConfig} />
          {/* <Footer /> */}
        </div>

        <div className="main col-md-7 col-md-offset-3">
          <TopNav data={AppConfig.categories} category="none" />

          <div className="pageContent" dangerouslySetInnerHTML={content}>
          </div>
          <div className="ds-thread" data-thread-key={post.slug}
            data-title={post.title}></div>

        </div>

        <div className="inserted-scripts"
          dangerouslySetInnerHTML={{ __html: post_after_script }}>
        </div>
      </DefaultLayout>
    );
  }
});

module.exports = CustomPage;
