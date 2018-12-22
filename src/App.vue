<template>
  <div id="app">

    <div class="site-header">
      <div class="container">Randomizer</div>
    </div><!-- .site-header -->

    <nav-bar
      :links="links"
    ></nav-bar>

    <item-add-field
      add-field-placeholder="Add new item"
      @add-new-item="addNewItem"
      ></item-add-field>

    <item-list-plain
      :items="items"
      @clear-items="clearItems"
    ></item-list-plain>

    <button-next
      :items="items"
    ></button-next>
  </div><!-- #app-page -->
</template>

<script>
import ButtonNext from './components/ButtonNext.vue';
import ItemAddField from './components/ItemAddField.vue';
import ItemListPlain from './components/ItemListPlain.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'app',
  components: {
    ButtonNext,
    ItemAddField,
    ItemListPlain,
    NavBar
  },
  data () {
  return {
    links: [
      {
        href: '#',
        label: 'About Randomizer'
      }
    ],
    items: []
  };
  },
  methods: {
    addNewItem: function (item) {
      this.items.push({
        name: item
      });
    },
    clearItems() {
        this.items = [];
    }
  }
};
</script>

<style lang="scss">
@charset 'UTF-8';
@import '../sass/main.scss';

html, body {
  background-color: #F7F8FC;
}

/**
 * 1. Make the line-height same as the text so that the line fits nicely in
 * the centre with 1 rem padding at the top and bottom.
 */
.site-header {
  padding: 1rem;
  height: 4rem;
  line-height: 1em; /* [1] */
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 0.125em;
  background-color: #0D2336;
  color: white;
}

/**
 * A smaller version of the main container.
 * 1. Make the container full width with a maximum value.
 * 2. Center it in the viewport
 * 3. Don't assign padding as small screens may need to stretch the entire screen.
 * 4. Add padding for small screens.
 */
.container-small {
  margin-left: auto; /* 2 */
  margin-right: auto; /* 2 */
  padding: 0 0.5rem; /* 4 */
  max-width: 640px; /* 1 */
  width: 100%; /* 1 */
}
</style>

