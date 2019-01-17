<template>
  <div class="button-options">
    <div
      class="optbar clickable"
      @click="$emit('pick-more')"
    >

      <div class="optbar__title">
        {{ title }}
      </div>

      <div class="optbar__body">
        {{ body }}
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'button-options',
  data () {
    return {
      title: 'Pick another item',
      body: 'Select another item from the remaining list.'
    };
  }
}
</script>

