<template>
  <div id="appshell">

    <div class="site-header">
      <div class="container">
        <a href="/">Randomizer</a>
      </div>
    </div><!-- .site-header -->

    <nav-bar
      :links="links"
    ></nav-bar>

    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'app',
  components: {
    NavBar
  },
  data () {
    return {
      links: [
        {
          to: '/about',
          label: 'About Randomizer'
        }
      ]
    }
  }
};
</script>
