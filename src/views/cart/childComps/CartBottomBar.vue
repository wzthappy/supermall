<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        :is-checked="isSelectAll"
        class="check-button"
        @click.native="checkClick"
      />
      <span>全选</span>
    </div>

    <div class="price">合计: {{ totalPrice }}</div>

    <div class="cacluate" @click="calcClick">去计算({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton.vue";
import { mapGetters } from "vuex";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter((item) => {
            return item.isChecked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.cartList.filter((item) => {
        return item.isChecked;
      }).length;
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false;
      // 1. 使用filter
      // return !(this.cartList.filter((item) => !item.isChecked).length);
      // 2. 使用find
      return !this.cartList.find((item) => !item.isChecked);
      // 3. 普通遍历
      // for (let item of this.cartList) {
      //   if (!item.isChecked) {
      //     return false;
      //   }
      // }
      // return true;
    },
  },
  methods: {
    checkClick() {
      // if (this.isSelectAll) {  // 全部选中
      //   this.cartList.forEach(item => item.isChecked = false);
      // } else {  // 部分或全部不选中
      //   this.cartList.forEach(item => item.isChecked = true);
      // }

      let is = !this.isSelectAll;
      this.cartList.forEach((item) => (item.isChecked = is));
    },
    calcClick() {
      if (!this.isSelectAll) {
        this.$toast.show("请选择购买的商品", 2000);
      }
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: #eee;
  font-size: 14px;
  z-index: 999;
}

.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}

.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}

.price {
  margin-left: 20px;
  flex: 1;
}

.cacluate {
  width: 90px;
  background: red;
  color: #fff;
  text-align: center;
}
</style>