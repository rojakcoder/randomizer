<template>
  <a
    class="bgb"
    :href="href"
  >
    <div class="bgb__icon">
      <div class="bgb__icon__wrapper">
        {{ icon }}
      </div>
    </div>
    <div class="bgb__title">
      {{ title }}
    </div>
  </a>
</template>

<script>
export default {
  name: 'btn-grid-button',
  props: ['title', 'icon', 'href']
};
</script>

