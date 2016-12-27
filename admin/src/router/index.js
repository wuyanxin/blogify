import Vue from 'vue';
import VueRouter from 'vue-router';
import Post from '../components/Post';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: '/post/:id', component: Post },
  ],
});
