import Vue from 'vue';
import Router from 'vue-router';
import PostList from '../components/PostList';

Vue.use(Router);

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: 'Post',
      path: '/post',
      component: PostList,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
