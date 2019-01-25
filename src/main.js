import Vue from 'vue';
//import App from './App.vue';
import App from './App.vue';
import store from './store/store';
import router from './router';

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  components: {
    App
  }
});

if (process.env.NODE_ENV === 'development') {
  document.write('<script src="http://' +
    (location.host || 'localhost').split(':')[0] +
    ':35729/livereload.js?snipver=1"></script>');
}
