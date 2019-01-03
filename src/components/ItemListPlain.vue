<template>
  <div class="item-list-plain">
    <div class="container-small">

      <div class="text-guide">
        Click/tap an item for option to remove.
      </div>

      <ul class="list-plain">
        <li
          class="list-item clearfix"
          :class="{ selected: item.isSelected }"
          v-for="(item, index) in items"
          @click="selectItem(index)"
        >
          <span
            v-if="!item.isSelected"
          >
            {{ item.name }}
          </span>
          <button
            v-else
            class="btnemb"
            @click.stop="remove(index)"
          >
            Remove
          </button>
        </li>
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
    },
    remove(index) {
      this.$store.commit('remove', {
        index
      });
    },
    selectItem(index) {
      this.$store.commit('select', {
        selected: true,
        index
      });
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

.list-item.selected {
  background-color: #CF466F;
}

.text-guide {
  padding: 1rem;
  color: #808080;
}

.afteroptions {
  margin: 1rem;
  text-align: right;
}

.btnemb {
  padding: 0.375rem 0.5rem;
  border: 1px solid white;
  border-radius: 2px;
  float: right;
  font-size: 0.875rem;
  color: white;

  &:hover {
    border-color: #CF466F;
    color: #CF466F;
    background-color: rgba(255, 255, 255, 0.5);
  }
}
</style>

