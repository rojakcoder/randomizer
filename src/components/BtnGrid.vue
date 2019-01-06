<template>
  <div class="btngrid">
    <div class="btngrid__subtitle">
      Next steps&hellip;
    </div>

    <div class="btngrid__grid">

      <btn-grid-button
        title="Pick one item"
        icon="1"
      ></btn-grid-button>

      <btn-grid-button
        title="Pick several items"
        icon="N"
        class="alt disabled"
      ></btn-grid-button>

      <btn-grid-button
        title="Make a list"
        icon="N"
        class="alt disabled"
      ></btn-grid-button>

      <btn-grid-button
        title="Sort into groups"
        icon="N"
        class="disabled"
      ></btn-grid-button>
    </div>
  </div>
</template>

<script>
import BtnGridButton from './BtnGridButton.vue';

export default {
  name: 'btn-grid',
  components: {
    BtnGridButton
  }
}
</script>

