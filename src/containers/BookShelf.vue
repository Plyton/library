<template>
  <li>
    <div class="shelf__book">
      <BookShelfItem
        v-for="(book,index) of shelf"
        :key="index"
        :book="book"
        @describe="showDescription"
        @rotate="rotateBook"
      />
    </div>
    <div class="shelf__spec">
      <BookShelfCell
        v-for="item of cellSettings"
        :key="item.key"
        :cell="item"
        :mobile-version="IS_MOBILE"
        :shelf-number="shelfNumber"
        @sort="sortBooks"
        @reset="resetBooks"
        @add="addBook"
      />
    </div>
  </li>
</template>

<script>
import BookShelfItem from "../components/BookShelfItem";
import BookShelfCell from "../components/BookShelfCell";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "BookShelf",
  components: {
    BookShelfItem,
    BookShelfCell
  },
  props: {
    shlefItem: {
      type: Array,
      required: true
    },
    shelfNumber: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      cellSettings: [
        {
          key: "0",
          class: "",
          sortable: "",
          title: "Полка"
        },
        {
          key: "1",
          class: "fas fa-sort-amount-up-alt pointer scale",
          sortable: "sort",
          title: "Автор"
        },
        {
          key: "2",
          class: "fas fa-sort-amount-up-alt scale",
          sortable: "sort",
          title: "Название"
        },
        {
          key: "3",
          class: "fas fa-trash-restore-alt pointer scale",
          sortable: "reset",
          title: "Сброс"
        },
        {
          key: "4",
          class: "fas fa-plus shelf__spec-add pointer scale",
          sortable: "add",
          title: "Добавить"
        }
      ],
      defaultShelf: [],
      shelf: [...this.shlefItem]
    };
  },
  computed: { ...mapGetters(["IS_MOBILE"]) },
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
  },
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
      if (sortBy == "Автор") {
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
      if (sortBy == "Название") {
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
  }
};
</script>
