const React = require('react');
const moment = require('moment');
const DefaultLayout = require('../layouts/default');
const Nav = require('../components/nav');
const TopNav = require('../components/topNav');
const Footer = require('../components/footer');
const AppConfig = require('../../config.js');

const ArchiveGroup = React.createClass({
  render: function () {
    return (
      <div className="archive-group">
        <h3>{this.props.title}</h3>
        <ul>
          {this.props.group.map(function(post, index) {
            let createdAt = moment(post.createdAt).format('YYYY-MM-DD');
            return (
              <li>
                <a href={'/' + post.slug}>
                  {post.title}
                </a>
                <small>{createdAt}</small>
              </li>
            );
          })}
        </ul>
      </div>
    )
  },
});

const PostList = React.createClass({
  render: function() {
    let groups = [];
    for (let key in this.props.posts) {
      groups.push(<ArchiveGroup group={this.props.posts[key]} title={key}/>);
    }

    return (
      <div className="archive-posts">
        <h1>归档</h1>
        {groups}
      </div>
    );
  },
});

const ArchivePage = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title} >
        <div className="sidebar col-md-3">
          <Nav config={AppConfig} />
          {/* <Footer /> */}
        </div>

        <div className="main col-md-7 col-md-offset-3">
          <TopNav data={AppConfig.categories} category="none" />

          <PostList posts={this.props.posts} />
        </div>
      </DefaultLayout>
    );
  }
});

module.exports = ArchivePage;
