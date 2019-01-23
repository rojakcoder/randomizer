<template>
  <div class="page-about">
    <div class="container-small">

      <p>
      Randomizer is a lightweight Web app to help pick random items. It is a single page application (SPA) written with <a href="https://vuejs.org/">Vue.js</a>.
      </p>

      <p>
      The current version performs only one function - to pick one random item out of a list of items.
      </p>

      <p>
      Any data you enter into the app is stored locally in your browser only. No data is sent to any server any where.
      </p>

    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
  name: 'About'
};
</script>
