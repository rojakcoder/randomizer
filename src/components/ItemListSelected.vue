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
          {{ item.name }}
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
      if (this.randNum === -1) {
        return '-';
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
  beforeUpdate: function () {
    this.pickItem();
  }
};
</script>

