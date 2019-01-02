<template>
  <div class="container-small">
    <div class="txtc"
      v-if="count > 0"
    >
      <button
        class="btn-next"
      >
        Next ({{ count }})
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'button-next',
  computed: {
    count() {
      return this.$store.getters.linkitems.length;
    }
  }
}
</script>

<style lang="scss">
@import '../../sass/abstracts/_variables.scss';

.btn-next {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  width: 100%;
  text-transform: uppercase;
  background-color: $action-color1;
  color: hsla(0, 0, 100, 0.9);
}
</style>

