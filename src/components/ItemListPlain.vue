<template>
  <div class="item-list-plain">
    <div class="container-small">

      <div
        v-if="items.length > 0"
        class="text-guide"
      >
        Click/tap an item for option to remove.
      </div>
      <div
        v-else
        class="helptext"
      >
        Enter a list of items using the input box above. Once done, click NEXT to start picking an item from your list at random.
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

