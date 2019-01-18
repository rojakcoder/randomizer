<template>
  <div class="container-small">

    <back-nav
      @back="onClickBack"
    ></back-nav>

    <list-title></list-title>
    <btn-grid></btn-grid>
  </div>

</template>

<script>
import BackNav from '../components/BackNav.vue';
import ListTitle from '../components/ListTitle.vue';
import BtnGrid from '../components/BtnGrid.vue';
//@deprecated import ButtonPrev from '../components/ButtonPrev.vue';

export default {
  name: 'action',
  components: {
    BackNav,
    ListTitle,
    BtnGrid
  },
  methods: {
    onClickBack() {
      this.$router.push('/');
    }
  }
}
</script>
