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
        :shelfNumber="'1'"
      />
    </div>
  </li>
</template>

<script>
import Book from "../components/Shelf-book";
import Spec from "../components/Shelf-spec";
export default {
  components: {
    Book,
    Spec
  },
  data() {
    return {
      defaultShelf: [],
      shelf: [
        {
          autor: "Пушкин А. С.",
          title: '"Евгений Онегин"',
          publication: "1833",
          pages: "322"
        },
        {
          autor: "Достоевский Ф. М.",
          title: '"Идиот"',
          publication: "1869",
          pages: "322"
        },
        {
          autor: "Пушкин А. С.",
          title: '"Капитанская дочка"',
          publication: "1833",
          pages: "405"
        },
        {
          autor: "Гоголь Н. В.",
          title: '"Ревизор"',
          publication: "2001",
          pages: "205"
        }
      ]
    };
  },
  methods: {
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
  mounted() {
    this.defaultShelf = [...this.shelf];
  }
};
</script>
