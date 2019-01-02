import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    linkitems: []
  },
  mutations: {
    add (state, item) {
      state.linkitems.push(item);
    },
    clear (state) {
      state.linkitems = [];
    },
    update (state, items) {
      state.linkitems = items;
    }
  },
  getters: {
    linkitems: state => state.linkitems
  }
});

