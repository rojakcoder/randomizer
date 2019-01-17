<template>
  <div class="item-list-selected">

      <ul class="list-selected">
        <li
          class="list-item"
          v-for="item in itemsSelected"
        >
          {{ item ? item.name : '' }}
        </li>
      </ul>

      <button-options
        @pick-more="onPickMore"
      ></button-options>

      <ul class="list-unselected">
        <li
          class="list-item"
          v-for="item in itemsUnselected"
        >
          {{ item ? item.name : '-' }}
        </li>
      </ul>

      <button-restart></button-restart>

  </div>
</template>

<script>
import ButtonOptions from '../components/ButtonOptions.vue';
import ButtonRestart from '../components/ButtonRestart.vue';

export default {
  name: 'item-list-selected',
  components: {
    ButtonOptions,
    ButtonRestart
  },
  data() {
    return {
      itemsSelected: [],
      itemsUnselected: [],
      randNum: -1
    };
  },
  methods: {
    onPickMore() {
      this.randNum = Math.floor(Math.random() * this.itemsUnselected.length);
      this.itemsSelected.push(this.itemsUnselected[this.randNum]);
      this.itemsUnselected = [
        ...(this.itemsUnselected.slice(0, this.randNum)),
        ...(this.itemsUnselected.slice(this.randNum + 1))
      ];
      this.$emit('update-count', this.itemsSelected.length);
    },
    pickItem() {
      if (!this.$store.getters.linkitems || !this.$store.getters.linkitems.length) {
        this.items = [];
      }

      let count = this.$store.getters.linkitems.length;
      this.randNum = Math.floor(Math.random() * count);
      this.itemsSelected.push(this.$store.getters.linkitems[this.randNum]);
      this.itemsUnselected = [
        ...(this.$store.getters.linkitems.slice(0, this.randNum)),
        ...(this.$store.getters.linkitems.slice(this.randNum + 1))
      ];
      this.$emit('update-count', this.itemsSelected.length);
    }
  },
  created: function () {
    if (this.$store.getters.linkitems) {
      this.pickItem();
    }
  }
};
</script>

