import Vue from 'vue';
import moment from 'moment';
import App from './App';
import router from './router';

Vue.filter('dateformat', date => moment(date).format('YYYY-MM-DD'));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
});
