<template>
  <div class="page-about">
    <div class="container-small">

      <p>
      Randomizer is a simple, lightweight web app for picking random items from a list.
      </p>

      <h4>Simple</h4>

      <p>
      It does only one thing which is to pick one or more random items from a list supplied by you.
      </p>

      <h4>Lightweight</h4>

      <p>
      It is lightweight because after loading the app from the server, there is no more interaction between the server and your browser. Any data you enter only stays in your browser.
      </p>
      <p>
      This is doable because the data is stored locally in your browser in an area known as Local Storage.
      </p>

      <h4>Why?</h4>

      <p>
      This Web app was created by me as a project to learn <a href="https://vuejs.org">Vue JS</a>. It is an open source project hosted in <a href="https://github.com/rojakcoder/randomizer">Github</a>.
      </p>

      <p>
      If you find a problem or bug with the app, feel free to <a href="https://github.com/rojakcoder/randomizer/issues">file an issue in Github</a>.
      </p>

      <h4>Anything more?</h4>

      <p>
      There are at least three more features of this random picker app that I've not implemented. No timeline is being set for when they will be implemented. If you have a need for new features, please ping me on <a href="https://twitter.com/chuacheehow">Twitter</a>.
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
