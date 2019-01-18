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
      // remove all selections when a new item is added
      for (let item of state.linkitems) {
        delete item.isSelected;
      }
      state.linkitems.push(item);
      localStorage.items = JSON.stringify(state.linkitems);
    },
    clear (state) {
      state.linkitems = [];
      localStorage.removeItem('items');
    },
    remove (state, { index }) {
      state.linkitems.splice(index, 1);
      localStorage.items = JSON.stringify(state.linkitems);
    },
    /**
     * set initializes the set of items which are retrieved from Local Storage.
     * set removes the `isSelected` attribute to prevent the items from being
     * selected right from the get-go.
     */
    set (state, items) {
      for (let item of items) {
        delete item.isSelected;
      }
      state.linkitems = items;
    },
    select (state, { index }) {
      let item = state.linkitems[index];

      Vue.set(item, 'isSelected', !item.isSelected);
    },
    unselect (state, { index }) {
      let item = state.linkitems[index];

      Vue.set(item, 'isSelected', false);
    }
  },
  getters: {
    linkitem: (state) => (index) => state.linkitems[index],
    linkitems: state => state.linkitems
  }
});

