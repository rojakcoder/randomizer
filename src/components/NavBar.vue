<template>
  <div class="metalinks">
    <a
       v-for="link in links"
       :href="link.href"
    >
    {{ link.label }}
    </a>
  </div><!-- .metalinks -->
</template>

<script>
export default {
  name: 'nav-bar',
  props: ['links']
}
</script>

<style lang="scss">
.metalinks {
  padding: 0.5rem 1rem;
  text-align: right;
  font-size: 0.75rem;
}
</style>

