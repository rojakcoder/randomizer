<template>
  <div class="container-small">

    <action-title
      title="Pick one item"
      icon="1"
    ></action-title>

    <action-subtitle
      v-if="quantity === 1"
      title="Selected item"
    ></action-subtitle>
    <action-subtitle
      v-else
      title="Selected items"
    ></action-subtitle>

    <item-list-selected
      @update-count="onUpdateCount"
    ></item-list-selected>
  </div>
</template>

<script>
import ActionTitle from '../components/ActionTitle.vue';
import ActionSubtitle from '../components/ActionSubtitle.vue';
import ItemListSelected from '../components/ItemListSelected.vue';

export default {
  name: 'action-one',
  data() {
    return {
      // quantity is used to determine plurality.
      quantity: 1
    }
  },
  components: {
    ActionTitle,
    ActionSubtitle,
    ItemListSelected
  },
  methods: {
    onUpdateCount(count) {
      this.quantity = count;
    }
  }
}
</script>

