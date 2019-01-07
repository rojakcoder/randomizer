<template>
  <div class="container-small">

    <action-title
      title="Pick one item"
      icon="1"
    ></action-title>


    <action-subtitle
      title="Selected item"
    ></action-subtitle>

    <item-list-selected></item-list-selected>
  </div>
</template>

<script>
import ActionTitle from '../components/ActionTitle.vue';
import ActionSubtitle from '../components/ActionSubtitle.vue';
import ItemListSelected from '../components/ItemListSelected.vue';

export default {
  name: 'action-one',
  components: {
    ActionTitle,
    ActionSubtitle,
    ItemListSelected
  }
}
</script>

