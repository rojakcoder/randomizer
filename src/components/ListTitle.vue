<template>
  <div class="list-title">
    You've got a list of {{ count }} items.
  </div>
</template>

<script>
export default {
  name: 'list-title',
  computed: {
    count() {
      return this.$store.getters.linkitems.length;
    }
  }
}
</script>

