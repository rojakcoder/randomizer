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

