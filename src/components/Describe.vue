<template>
  <section class="describe">
    <h2 class="describe__title">Информация</h2>
    <div class="describe__content">
      <div class="describe__content-autor">
        <span>Автор:</span>
        <span v-if="description">{{description.bookInformation.autor}}</span>
      </div>
      <div class="describe__content-name">
        <span>Название:</span>
        <span v-if="description">{{description.bookInformation.title}}</span>
      </div>
      <div class="describe__content-year">
        <span>Год издания:</span>
        <span v-if="description">{{description.bookInformation.publication}}</span>
      </div>
      <div class="describe__content-page">
        <span>Количество страниц:</span>
        <span v-if="description">{{description.bookInformation.pages}}</span>
      </div>
    </div>
    <section class="functions">
      <button :class="calcBtnClass" @click="editBook(description)">Редактировать</button>
      <button
        :class="calcBtnClass"
        @click="description ? $parent.modalWindowOpen = true : false"
      >Удалить</button>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      description: null
    };
  },
  computed: {
    calcBtnClass() {
      return {
        btn: true,
        "functions--opacity": !this.description
      };
    },
    calcBtnEvent() {
      this.description
        ? ($parent.modalWindowOpen = true)
        : ($parent.modalWindowOpen = false);
    }
  },
  methods: {
    editBook(book) {
      if (!book) {
        return;
      }
      this.$parent.$refs.form.hasError.addError = false;
      this.$parent.$refs.form.formHeader = "Редактировать";
      this.$parent.$refs.form.bookInformation = book.bookInformation;
      this.$parent.formOpen = true;
    },
    removeBook(book) {
      if (this.description) {
        this.description.bookShelf.splice(
          this.description.bookShelf.indexOf(book),
          1
        );

        this.description.defaultBookShelf.splice(
          this.description.bookShelf.indexOf(book),
          1
        );
        this.description.bookPosition.rotateOn = false;
        this.description.bookPosition.rotateOff = false;
        this.$parent.blockContentRest = false;
        this.description = null;
      }
    }
  }
};
</script>
