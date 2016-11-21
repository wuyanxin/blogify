
const config = {
  development: {
    blogName: "Ethan's blog",
    url: 'http://wuyanxin.com',
    logo: 'https://www.gravatar.com/avatar/0531873f81c71a5a9ee9e3071a4ffa87?s=250&d=mm&r=x',

    author: {
      name: '吴彦欣',
      avatar: 'https://www.gravatar.com/avatar/0531873f81c71a5a9ee9e3071a4ffa87?s=250&d=mm&r=x',
      sns: [
        { logo: 'socicon-github', url: 'http://github.com/wuyanxin', title: 'GitHub' },
        { logo: 'socicon-stackoverflow', url: 'http://stackoverflow.com/users/5550807/ethan-wu', title: 'StackoverFlow' },
        { logo: 'socicon-rss', url: 'http://wuyanxn.com/fead', title: 'Feed' },
      ]
    },

    topNav: [
      { type: 'filter', category: 'tech', title: '技术' },
      { type: 'filter', category: 'live', title: '生活' },
      { type: 'page', title: '生活', url: '' },
    ],

    leftNav: [
      { title: '归档', logo: '', url: '' },
      { title: '友链', logo: '', url: '' },
      { title: '关于', logo: '', url: '' },
    ],

    global_before_script: '',
    global_after_script: '',
    post_before_script: '',
    post_after_script: '',
  },

  production: {},
}

module.exports = config[process.env.NODE_ENV || 'development'];
