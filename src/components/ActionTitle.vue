<template>
  <div class="action-title clearfix">
    <div class="action-title__icon">
      <div class="action-title__icon__wrapper">
        {{ icon }}
      </div>
    </div>
    <div class="action-title__title">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'action-title',
  props: ['icon', 'title']
};
</script>

