import Vue from 'vue';
//import App from './App.vue';
import AppShell from './AppShell.vue';
import store from './store/store';
import router from './router';

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(AppShell),
  components: {
    AppShell
  }
});

