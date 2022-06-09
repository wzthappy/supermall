<template>
  <Swiper>
    <Swiper-item v-for="item in banners" :key="item.title">
      <!-- <a :href="item.link"> -->
        <img :src="item.image" @load="imageLoad" />
      <!-- </a> -->
    </Swiper-item>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper/index";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isLoad: false,
    };
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImagLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style scoped>
</style>