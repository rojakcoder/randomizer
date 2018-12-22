<template>
  <div class="container-small">

    <div class="item-add-field">
      <input
        class="item-add-field__input"
        type="text"
        name="add-field"
        id="add-field"
        :placeholder="addFieldPlaceholder"
        v-model="itemNew"
        @keyup.enter="addItem"
      />
      <div class="item-add-field__button"
        @click="addItem">+</div><!-- .add-field-button -->
    </div><!-- .add-field -->

  </div><!-- .container-small -->
</template>

<script>
export default {
  name: 'item-add-field',
  props: {
    addFieldPlaceholder: {
      type: String
    }
  },
  data () {
    return {
      itemNew: ''
    };
  },
  methods: {
    addItem () {
      this.$emit('add-new-item', this.itemNew);
      this.itemNew = '';
    }
  }
}
</script>

<style lang="scss">
@import '../../sass/abstracts/_variables.scss';

/**
 * The big white bar.
 */
.item-add-field {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-top: 4rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  background-color: white;
}

/**
 * The input field in the bar.
 * 1. overflow: hidden is required to prevent the font-size: 2rem from
 *    "pushing" the button out when in mobile view.
 */
.item-add-field__input {
  flex: 1;
  margin: 0.875rem;
  border-width: 0;
  overflow: hidden; /* [1] */
  font-size: 2rem;
}

/**
 * The big blue button.
 */
.item-add-field__button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  border-radius: 4px;
  width: 3rem;
  height: 3rem;
  float: right;
  cursor: pointer;
  font-weight: bold;
  font-size: 3rem;
  color: hsla(0, 0, 100, 0.9);
  background-color: $action-color1;
}
</style>
