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
    book: { type: Object, required: true }
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
  transform: rotate3d(1, 1, 1, 360deg);
  transition: transform 0.6s ease;
  min-width: 9rem;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  justify-content: space-around;
  z-index: 10;
  & span {
    writing-mode: horizontal-tb;
  }
}
.rotateOff {
  width: 3.3rem;
  flex-wrap: nowrap;
  flex-direction: row;
  transform: rotate3d(1, 1, 1, -360deg);
  transition: transform 0.6s ease;
  z-index: 0;
  & span {
    writing-mode: vertical-rl;
  }
}
</style>

