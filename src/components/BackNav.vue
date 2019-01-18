<template>
  <div class="back-nav"
    @click="$emit('back')"
  >
    <i class="material-icons">keyboard_arrow_left</i>
    <span class="label">Back</span>
  </div>
</template>

<script>
export default {
  name: 'back-nav'
}
</script>

