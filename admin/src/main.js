import Vue from 'vue';
import VueRouter from 'vue-router';
import moment from 'moment';
import App from './App';
import Post from './components/Post';

Vue.filter('dateformat', date => moment(date).format('YYYY-MM-DD'));

const router = new VueRouter({
  routes: [
    { path: '/post/:id', component: Post },
  ],
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
});
