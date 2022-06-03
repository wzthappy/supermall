<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-swiper :topImages="topImages"/>

  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue';
import DetailSwiper from './DetailSwiper.vue';

import { getDetail } from '@/network/detail.js'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper
  },
  data() {
    return {
      iid: null,
      topImages: []
    }
  },
  created() {
    // 1. 保存出入的iid
    this.iid = this.$route.params.iid;

    // 2. 根据iid请求详情数据
    getDetail(this.iid).then(res => {
      console.log(res);
      this.topImages = res.result.itemInfo.topImages;
    });
  }
}
</script>

<style scoped>

</style