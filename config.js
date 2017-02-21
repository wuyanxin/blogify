
const config = {
  development: {
    blogName: "Ethan's blog",
    // url: 'http://wuyanxin.com',
    host: 'http://localhost:3000',
    logo: 'https://www.gravatar.com/avatar/0531873f81c71a5a9ee9e3071a4ffa87?s=250&d=mm&r=x',

    author: {
      name: '吴彦欣',
      avatar: 'https://www.gravatar.com/avatar/0531873f81c71a5a9ee9e3071a4ffa87?s=250&d=mm&r=x',
      sns: [
        { logo: 'socicon-stackoverflow', url: 'http://stackoverflow.com/users/5550807/ethan-wu', title: 'StackoverFlow' },
        { logo: 'socicon-github', url: 'https://github.com/wuyanxin', title: 'GitHub' },
        { logo: 'socicon-rss', url: 'https://wuyanxn.com/fead', title: 'Feed' },
      ]
    },

    categories: [
      { value: 'tech', name: '技术', url: '/' },
      { value: 'live', name: '生活', url: '/category/live' },
    ],

    leftNav: [
      { title: '文章归档', logo: '', url: '/archives' },
      { title: '友情链接', logo: '', url: '/link' },
      { title: '关于', logo: '', url: '' },
    ],

    global_before_script: '',
    global_after_script: '',
    post_before_script: '',
    post_after_script: `
      <!-- 多说公共JS代码 start -->
      <script type="text/javascript">
        var duoshuoQuery = {short_name:"blog-wuyanxin-hexo"};
      	(function() {
      		var ds = document.createElement('script');
      		ds.type = 'text/javascript';ds.async = true;
      		ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
      		ds.charset = 'UTF-8';
      		(document.getElementsByTagName('head')[0]
      		 || document.getElementsByTagName('body')[0]).appendChild(ds);
      	})();
      </script>
      <!-- 多说公共JS代码 end -->
    `,
  },

  production: {
    blogName: "Ethan's blog",
    // url: 'http://wuyanxin.com',
    host: 'http://localhost:3000',
    logo: 'https://www.gravatar.com/avatar/0531873f81c71a5a9ee9e3071a4ffa87?s=250&d=mm&r=x',

    author: {
      name: '吴彦欣',
      avatar: 'https://www.gravatar.com/avatar/0531873f81c71a5a9ee9e3071a4ffa87?s=250&d=mm&r=x',
      sns: [
        { logo: 'socicon-stackoverflow', url: 'http://stackoverflow.com/users/5550807/ethan-wu', title: 'StackoverFlow' },
        { logo: 'socicon-github', url: 'https://github.com/wuyanxin', title: 'GitHub' },
        { logo: 'socicon-rss', url: 'https://wuyanxn.com/fead', title: 'Feed' },
      ]
    },

    categories: [
      { value: 'tech', name: '技术', url: '/' },
      { value: 'live', name: '生活', url: '/category/live' },
    ],

    leftNav: [
      { title: '文章归档', logo: '', url: '/archives' },
      { title: '友情链接', logo: '', url: '/link' },
      { title: '关于', logo: '', url: '' },
    ],

    global_before_script: '',
    global_after_script: '',
    post_before_script: '',
  },
}

module.exports = config[process.env.NODE_ENV || 'development'];
