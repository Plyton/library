<template>
  <section :class="calcWrapClass">
    <div class="modal-window__content">
      <h4 class="modal-window__content-title">Вы действительно хотите удалить книгу?</h4>
      <div class="modal-window__content-function">
        <button class="btn" @click="removeBook">да</button>
        <button class="btn" @click="$parent.modalWindowOpen = false">нет</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: { value: { type: Boolean } },
  computed: {
    calcWrapClass() {
      return this.value ? "modal-window" : "display-no";
    }
  },
  methods: {
    removeBook() {
      this.$parent.$refs.describe.removeBook(
        this.$parent.$refs.describe.description.bookInformation
      );
      this.$parent.modalWindowOpen = false;
    }
  }
};
</script>

