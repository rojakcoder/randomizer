<template>
  <div class="item-list-plain">
    <div class="container-small">

      <div class="text-guide">
        Click/tap an item for option to remove.
      </div>

      <ul class="list-plain">
        <li
          class="list-item"
          v-for="item in items"
          v-text="item.name"
        ></li>
      </ul><!-- .list-plain -->

      <div
        class="afteroptions"
        v-if="items.length > 0"
      >
        <a href="#" @click="clearItems">Clear all</a>
      </div>

    </div><!-- .container-small -->
  </div>
</template>

<script>
export default {
  name: 'item-list-plain',
  computed: {
    items() {
      return this.$store.getters.linkitems;
    }
  },
  methods: {
    clearItems() {
      this.$store.commit('clear');
      localStorage.removeItem('items');
    }
  }
};
</script>

<style lang="scss">
.item-list-plain {
  margin: 2rem 0 0;
}

.list-item {
  margin-bottom: 0.5rem;
  padding: 0.75rem;
  background-color: hsla(0, 0, 100, 0.9);
  list-style: none;
  font-size: 1.5rem;
  color: #1D2A36;
}

.text-guide {
  padding: 1rem;
  color: #808080;
}

.afteroptions {
  margin: 1rem;
  text-align: right;
}
</style>

