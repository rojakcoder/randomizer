import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Action from '../pages/Action.vue';
import ActionOne from '../pages/ActionOne.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/action',
      name: 'Action',
      component: Action
    },
    {
      path: '/action-one',
      name: 'ActionOne',
      component: ActionOne
    }
  ]
});

