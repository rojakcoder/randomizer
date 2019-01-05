<template>
  <div class="metalinks">
    <router-link
      v-for="link in links"
      :to="link.to"
      >{{ link.label }}</router-link>
  </div><!-- .metalinks -->
</template>

<script>
export default {
  name: 'nav-bar',
  props: ['links']
}
</script>

