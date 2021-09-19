<template>
  <div v-if="calcShelCell">
    <span v-show="calcCellTitle">{{cell.title}} {{calcShelfNumber}}</span>
    <span v-show="cell.sortable">
      <i :class="cell.class" @click="$emit(cell.sortable, cell.title)"></i>
    </span>
  </div>
</template>

  <script>
export default {
  name: "BookShelfCell",
  props: {
    mobileVersion: { type: Boolean, required: true, default: false },
    cell: { type: Object },
    shelfNumber: { type: [String, Number] }
  },
  computed: {
    calcShelfNumber() {
      return this.cell.title == "Полка" ? `№${this.shelfNumber}` : null
    },
    calcShelCell() {
      return this.mobileVersion ? this.cell.title != "Полка" : true;
    },
    calcCellTitle() {
      return this.mobileVersion
        ? this.cell.title != "Сброс" && this.cell.title != "Добавить"
        : true;
    }
  }
};
</script>

<style lang="less" scoped>
</style>