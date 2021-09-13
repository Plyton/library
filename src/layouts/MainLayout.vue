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
        <ul class="shelf__container">
          <div :class="{'block-div': blockContentRest}"></div>
          <Shel-first />
          <Shel-second />
          <Shel-third />
        </ul>
      </section>
      <Describe ref="describe" />
    </main>
    <footer>
      <div>Все права защищены &copy;&nbsp;2021</div>
    </footer>
  </div>
</template>

<script>
import ModelWindow from "../components/Model-window";
import Form from "../components/Form";
import ShelfFirst from "../containers/Shelf-First";
import ShelfSecond from "../containers/Shelf-Second";
import ShelfThird from "../containers/Shelf-Third";
import Describe from "../components/Describe";
export default {
  name: "main-layout",
  components: {
    "Shel-first": ShelfFirst,
    "Shel-second": ShelfSecond,
    "Shel-third": ShelfThird,
    "Model-window": ModelWindow,
    Form,
    Describe
  },
  data() {
    return {
      blockContentRest: false,
      formOpen: false,
      modalWindowOpen: false
    };
  }
};
</script>


