<template>
  <div id="home">
    <Nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </Nav-bar>
    <Home-swiper :banners="banners"/>
    <Recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from './childComps/HomeSwiper.vue';
import RecommendView from './childComps/RecommendView.vue';

import { getHomeMultidata } from '@/network/home';

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banners: [],
      recommends: [],
    }
  },
  created() {
    // 请求多个数据
    getHomeMultidata().then(res => {
      // this.result = res;
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  }
};
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>