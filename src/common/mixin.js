import { debounce } from "./utils";  // 防抖
import BackTop from "@/components/content/backTop/BackTop";

export const itrmListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    }
  },
  mounted() {
    // 1. 图片加载完成的事件监听
    this.newRefresh = debounce(
      this.$refs.scroll && this.$refs.scroll.refresh,
      50
    );

    // 对监听的事件进行保存
    this.itemImgListener = () => {
      this.newRefresh();
    };

    this.$bus.$on("itemImageLoad", this.itemImgListener);
  }
}


export const backTopkMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    listenShowBackTop(position) {
      this.isShowBackTop = -position.y > 1000;
    },
  },
}