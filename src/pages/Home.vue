<template>
  <div id="app">

    <item-add-field
      add-field-placeholder="Add new item"
    ></item-add-field>

    <item-list-plain
      :items="linkitems"
    ></item-list-plain>

    <button-next
      :items="linkitems"
    ></button-next>
  </div><!-- #app-page -->
</template>

<script>
import ButtonNext from '../components/ButtonNext.vue';
import ItemAddField from '../components/ItemAddField.vue';
import ItemListPlain from '../components/ItemListPlain.vue';
import NavBar from '../components/NavBar.vue';

/**
 * App retrieves the data from Local Storage.
 */
export default {
  name: 'home',
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
          to: '/about',
          label: 'About Randomizer'
        }
      ]
    };
  },
  computed: {
    linkitems () {
      return this.$store.getters.linkitems;
    }
  }
};
</script>

