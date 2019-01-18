<template>
  <div class="button-restart">
    <router-link
      class="btnsingle"
      to="/"
      @click.native="onClickRestart"
    >
      <div class="btnsingle__title">
        New list
      </div>
      <div class="btnsingle__body">
        Start an empty list
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'button-restart',
  methods: {
    onClickRestart() {
      this.$store.commit('clear');
    }
  }
}
</script>

