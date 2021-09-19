<template>
  <section v-if="bookInformation" :class="calcWrapClass">
    <fieldset class="form__container">
      <h2 class="form__title">{{formHeader}}</h2>
      <form action="#" ref="formUser" class="form__content" @submit.prevent="formSubmit">
        <button class="form__content-close" @click="formClose">
          <i class="fas fa-times"></i>
        </button>
        <div class="form__content-input">
          <span class="form__content-title">Автор</span>
          <input
            type="text"
            name="autor"
            maxlength="25"
            placeholder="введите автора произведения"
            :value="bookInformation.autor"
            @focus="hasError.editError = false, hasError.addError = false"
            @keydown.enter="formSubmit"
            :class="hasError"
          />
        </div>
        <div class="form__content-input">
          <span class="form__content-title">Название</span>
          <input
            type="text"
            name="title"
            maxlength="20"
            placeholder="введите название произведения"
            :value="bookInformation.title"
            @focus="hasError.editError = false, hasError.addError = false"
            @keydown.enter="formSubmit"
            :class="hasError"
          />
        </div>
        <div class="form__content-input">
          <span class="form__content-title">Год</span>
          <input
            type="text"
            name="publication"
            maxlength="4"
            placeholder="введите год публикации"
            :value="bookInformation.publication"
            @keydown.enter="formSubmit"
          />
        </div>
        <div class="form__content-input">
          <span class="form__content-title">Страницы</span>
          <input
            type="text"
            name="pages"
            maxlength="10"
            placeholder="введите количество страниц"
            :value="bookInformation.pages"
            @keydown.enter="formSubmit"
          />
        </div>
        <div class="form__function">
          <input type="submit" class="btn" value="Готово" />
          <input type="button" class="btn" value="Отмена" @click="formClose" />
        </div>
      </form>
    </fieldset>
  </section>
</template>

<script>
export default {
  props: { value: { type: Boolean} },
  data() {
    return {
      defaultBookShelf: null,
      bookShelf: null,
      bookInformation: null,
      hasError: { editError: false, addError: false },
      formHeader: null
    };
  },
  computed: {
    calcWrapClass() {
      return this.value ? "form" : "display-no";
    }
  },
  methods: {
    formSubmit() {
      for (let key in this.hasError) {
        this.hasError[key] = false;
      }
      [...this.$refs.formUser].forEach(item => {
        if (item.name == "autor" || item.name == "title") {
          this.formCheсk(item.value);
        }
      });

      if (!this.hasError.editError && !this.hasError.addError) {
        [...this.$refs.formUser].forEach(item => {
          if (item.name) {
            this.bookInformation[item.name] = item.value;
          }
        });
        if (this.bookShelf) {
          this.bookShelf.push(this.bookInformation);
          this.defaultBookShelf.push(this.bookInformation);
          this.bookShelf = null;
          this.defaultBookShelf = null;
        }
        this.formClose();
      }
    },
    formClose() {
      this.$parent.formOpen = false;
    },
    formCheсk(txt) {
      if (!txt && this.formHeader == "Редактировать") {
        this.hasError.editError = true;
      }
      if (!txt && this.formHeader == "Добавить") {
        this.hasError.addError = true;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.addError {
  border-bottom: 2px solid rgb(255, 0, 0);
}
</style>>

