
const config = {
  development: {
    blogName: "Ethan's blog",
    url: 'http://wuyanxin.com',

    database: {
      host: 'localhost',
      database: 'blogify',
      user: 'root',
      password: '123'
    },

    author: {
      name: '吴彦欣',
      avatar: 'http://my-avatar',
      sns: [
        { logo: '', url: '', title: '' },
        { logo: '', url: '', title: '' },
      ]
    },

    topNav: [
      { type: 'filter', category: 'tech', title: '技术' },
      { type: 'filter', category: 'live', title: '生活' },
      { type: 'page', title: '生活', url: '', target: 'blank' },
    ],

    leftNav: [
      { title: '', logo: '', url: '' },
      { title: '', logo: '', url: '' },
    ],

    global_before_script: '',
    global_after_script: '',
    post_before_script: '',
    post_after_script: '',
  }, 

  production: {},
}

module.exports = config[process.env.NODE_ENV || 'development'];
