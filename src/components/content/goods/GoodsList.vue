<template>
  <div class="goods">
    <goods-list-ttem v-for="item in goods" :goods-item="item"/>
  </div>
</template>

<script>
import GoodsListTtem from './GoodsListTtem.vue'

export default {
  name: 'GoodsList',
  components: {
    GoodsListTtem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>