<template>
  <div>
    <span class="shelf__spec-number">{{calcShelfNumber}}</span>|
    <span class="shelf__spec-autor">Автор</span>
    <i class="fas fa-sort-amount-up-alt pointer scale" @click="$emit('sortByAutor', 'autor')"></i>
    <span class="shelf__spec-title">Название</span>
    <i class="fas fa-sort-amount-up-alt pointer scale" @click="$emit('sortByTitle', 'title')"></i>|
    <span class="shelf__spec-reset">Сброс</span>
    <i class="fas fa-trash-restore-alt pointer scale" @click="$emit('resetSorting')"></i> |
    <i class="fa fa-plus pointer scale" @click="$emit('addItem')"></i>
  </div>
</template>

<script>
export default {
  props: {
    shelfNumber: { type: String }
  },
  computed: {
    calcShelfNumber() {
      return `Полка №${this.shelfNumber}`;
    }
  }
};
</script>

