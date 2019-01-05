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
      if (this.itemNew.trim()) {
        this.$store.commit('add', {
          name: this.itemNew
        });
        this.itemNew = '';
      }
    }
  }
}
</script>

