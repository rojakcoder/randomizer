<template>
  <div class="container-small">
    <list-title></list-title>
    <btn-grid></btn-grid>
    <button-prev
      label="Change items"
    ></button-prev>
  </div>
</template>

<script>
import ListTitle from '../components/ListTitle.vue';
import BtnGrid from '../components/BtnGrid.vue';
import ButtonPrev from '../components/ButtonPrev.vue';

export default {
  name: 'action',
  components: {
    ListTitle,
    BtnGrid,
    ButtonPrev
  }
}
</script>
