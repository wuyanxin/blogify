
module.exports = [
  { 
    method: 'get', 
    pattern: '/', 
    controller: 'PageController',
    action: 'index',
    middlewares: []
  },
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
  }
];
