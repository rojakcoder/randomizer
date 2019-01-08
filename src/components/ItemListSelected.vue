<template>
  <div class="item-list-selected">

      <ul class="list-selected">
        <li
          class="list-item"
        >
          {{ itemSelected.name }}
        </li>
      </ul>

      <ul class="list-unselected">
        <li
          class="list-item"
          v-for="item in itemsUnselected"
        >
          {{ item.name ? item.name : '-' }}
        </li>
      </ul>

  </div>
</template>

<script>
export default {
  name: 'item-list-selected',
  data() {
    return {
      randNum: -1
    };
  },
  computed: {
    count() {
      return this.items.length;
    },
    items() {
      return this.$store.getters.linkitems;
    },
    itemSelected() {
      if (this.randNum === -1 || !this.$store.getters.linkitems || !this.$store.getters.linkitems.length) {
        return { name: '-' };
      }
      return this.$store.getters.linkitems[this.randNum];
    },
    itemsUnselected() {
      if (this.randNum === -1) {
        return this.$store.getters.linkitems;
      }
      return [
        ...(this.$store.getters.linkitems.slice(0, this.randNum)),
        ...(this.$store.getters.linkitems.slice(this.randNum + 1))
      ];
    }
  },
  methods: {
    pickItem() {
      this.randNum = Math.floor(Math.random() * this.count);
    }
  },
  created: function () {
    this.pickItem(); // need to repeat in updated
  },
  updated: function () {
    this.pickItem();
  }
};
</script>

