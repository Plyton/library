<template>
  <div class="app-main">
    <header>
      <span>Книжная лавка</span>
    </header>
    <main>
      <div :class="{ 'cover-div': formOpen || modalWindowOpen}"></div>
      <Form ref="form" v-model="formOpen" />
      <Model-window ref="modelWindow" v-model="modalWindowOpen" />
      <section class="shelf">
        <div :class="{'block-div': blockContentRest}"></div>
        <ul class="shelf__container">
          <Shelf v-for="(shelf, index) of shelves" :key="index" :item="shelf" />
        </ul>
      </section>
      <Describe ref="describe" />
    </main>
    <footer></footer>
  </div>
</template>

<script>
import ModelWindow from "./components/Model-window";
import Form from "./components/Form";
import Shelf from "./containers/Shelf";
import Describe from "./components/Describe";
export default {
  name: "main-layout",
  components: {
    Shelf,
    "Model-window": ModelWindow,
    Form,
    Describe
  },
  data() {
    return {
      shelves: [
        [
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
        ],

        [
          {
            autor: "Чехов А. П.",
            title: '"Хамелеон"',
            publication: "2002",
            pages: "456"
          },
          {
            autor: "Чехов А. П.",
            title: '"Смерть чиновника"',
            publication: "1954",
            pages: "502"
          },
          {
            autor: "Толстой Л. Н.",
            title: '"После бала"',
            publication: "1905",
            pages: "403"
          },
          {
            autor: "Булгаков М. А.",
            title: '"Морфий"',
            publication: "1968",
            pages: "368"
          },
          {
            autor: "Тургенев И. С.",
            title: '"Отцы и Дети"',
            publication: "1888",
            pages: "399"
          },
          {
            autor: "Чехов А. П.",
            title: '"Вишневый Сад"',
            publication: "1901",
            pages: "302"
          },
          {
            autor: "Пушкин А. С.",
            title: '"Пиковая дама"',
            publication: "1833",
            pages: "343"
          }
        ],

        [
          {
            autor: "Борис Акунин",
            title: '"Левиафан"',
            publication: "2018",
            pages: "250"
          },
          {
            autor: "Жюль Верн",
            title: '"Верн"',
            publication: "1999",
            pages: "408"
          },
          {
            autor: "Джек Лондон",
            title: '"Белый клык"',
            publication: "2006",
            pages: "533"
          },
          {
            autor: "Никколо Макиавелли",
            title: '"Государь"',
            publication: "1555",
            pages: "158"
          },
          {
            autor: "Борис Акунин",
            title: '"Азазель"',
            publication: "2015",
            pages: "248"
          }
        ]
      ],
      blockContentRest: false,
      formOpen: false,
      modalWindowOpen: false
    };
  }
};
</script>
<style lang="less">
@import "~@fortawesome/fontawesome-free/css/all.css";
@import "./assets/less/style.less";
@import "./assets/css/normalize.css";
</style>
