<template>
  <li>
    <div class="shelf__book">
      <Book
        v-for="(book,index) of shelf"
        :key="index"
        @describe="showDescription"
        @rotate="rotateBook"
        :book="book"
      />
    </div>
    <div class="shelf__spec">
      <Spec
        @sortByAutor="sortBooks"
        @sortByTitle="sortBooks"
        @resetSorting="resetBooks"
        @addItem="addBook"
        :isMobile="IS_MOBILE"
        :shelfNumber="'1'"
      />
    </div>
  </li>
</template>

<script>
import Book from "../components/Shelf-book";
import Spec from "../components/Shelf-spec";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    Book,
    Spec
  },
  props: {
    item: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      defaultShelf: [],
      shelf: [...this.item]
    };
  },
  computed: { ...mapGetters(["IS_MOBILE"]) },
  methods: {
    ...mapActions(["SET_MOBILE"]),
    showDescription(book, animation) {
      if (this.$parent.blockContentRest) {
        this.$parent.$refs.describe.description = {
          bookInformation: book,
          bookPosition: animation,
          bookShelf: this.shelf,
          defaultBookShelf: this.defaultShelf
        };
      } else {
        this.$parent.$refs.describe.description = null;
      }
    },
    rotateBook(book) {
      if (this.$parent.blockContentRest) {
        book.rotateOn = true;
        book.rotateOff = false;
      } else {
        book.rotateOn = false;
        book.rotateOff = true;
      }
    },
    sortBooks(sortBy) {
      debugger;
      if (sortBy == "autor") {
        return this.shelf.sort((a, b) => {
          if (a.autor > b.autor) {
            return 1;
          }
          if (a.autor < b.autor) {
            return -1;
          }
          return 0;
        });
      }
      if (sortBy == "title") {
        return this.shelf.sort((a, b) => {
          if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
          return 0;
        });
      }
    },
    resetBooks() {
      this.shelf = [...this.defaultShelf];
    },
    addBook() {
      this.$parent.$refs.form.bookInformation = {
        autor: null,
        title: null,
        publication: null,
        pages: null
      };
      this.$parent.$refs.form.bookShelf = this.shelf;
      this.$parent.$refs.form.defaultBookShelf = this.defaultShelf;
      this.$parent.$refs.form.formHeader = "Добавить";
      this.$parent.$refs.form.hasError.addError = false;
      this.$parent.formOpen = true;
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener("resize", this.onResize);
      if (document.documentElement.clientWidth < 600) {
        this.SET_MOBILE();
      }
    }
  },
  mounted() {
    this.defaultShelf = [...this.shelf];
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
};
</script>
