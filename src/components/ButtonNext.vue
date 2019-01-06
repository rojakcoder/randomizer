<template>
  <div class="container-small">
    <div class="txtc"
      v-if="count > 0"
    >
      <a
        class="btn-next full"
        href="#/action"
      >
        Next ({{ count }})
      </a>
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

