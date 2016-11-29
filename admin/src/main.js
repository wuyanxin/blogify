import Vue from 'vue';
import VueAsyncData from 'vue-async-data';
import moment from 'moment';
import App from './App';

Vue.use(VueAsyncData);

Vue.filter('dateformat', date => moment(date).format('YYYY-MM-DD'));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
