<template>
  <div
    class="shelf__book-item pointer"
    :class="classRotate"
    @click="$parent.$parent.blockContentRest = !$parent.$parent.blockContentRest, 
    $emit('describe', book, classRotate),
    $emit('rotate', classRotate)"
  >
    <span class="shelf__book-autor">{{book.autor}}</span>
    <span class="shelf__book-title">{{book.title}}</span>
  </div>
</template>

<script>
export default {
  props: {
    book: { type: Object }
  },
  data() {
    return {
      classRotate: {
        rotateOn: false,
        rotateOff: false
      }
    };
  }
};
</script>
<style lang="less" scoped>
.rotateOn {
  padding: 0 6.1rem;
  transform: rotate(-90deg);
  transition: transform 0.5s ease-in-out, padding 1s ease-in;
  z-index: 10;
}
.rotateOff {
  padding: 0.4rem;
  transform: rotate(0deg);
  transition: transform 0.5s ease-in-out, padding 1s ease-in;
  z-index: 0;
}
</style>

