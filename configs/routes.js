
module.exports = [
  {
    method: 'get',
    pattern: '/',
    controller: 'PageController',
    action: 'index',
    middlewares: []
  },

  // post
  {
    method: 'get',
    pattern: '/posts',
    controller: 'PostController',
    action: 'getList',
    middlewares: []
  },
  {
    pattern: '/post/:id',
    controller: 'PostController',
    action: 'getPost',
  },
  {
    method: 'post',
    pattern: '/post',
    controller: 'PostController',
    action: 'create',
  },
  {
    method: 'put',
    pattern: '/post',
    controller: 'PostController',
    action: 'update',
  },

  // category
  {
    pattern: '/category/:category',
    controller: 'PageController',
    action: 'category',
  },

  // archive
  {
    pattern: '/archives',
    controller: 'PostController',
    action: 'getArchives',
  },

  // admin
  {
    pattern: '/admin/login',
    controller: 'AuthController',
    action: 'loginPage',
  },
  {
    pattern: '/admin*',
    controller: 'PageController',
    action: 'admin',
  },
  {
    pattern: '/init',
    controller: 'AuthController',
    action: 'init',
  },
  {
    method: 'post',
    pattern: '/register',
    controller: 'AuthController',
    action: 'register',
  },
  {
    method: 'post',
    pattern: '/login',
    controller: 'AuthController',
    action: 'login',
  },

  // post page
  {
    pattern: '/:slug/',
    controller: 'PostController',
    action: 'postPage',
  },

];
