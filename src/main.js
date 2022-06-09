import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index.js'

import FastClick from 'fastclick';
import VueLazyLoad from 'vue-lazyload'

import toast from '@/components/common/toast/index'

Vue.config.productionTip = false

// 添加事件总线对象
Vue.prototype.$bus = new Vue();
// 安装toast插件
Vue.use(toast);

// 解决移动端300ms延迟
FastClick.attach(document.body);

// 使用懒加载的插件
Vue.use(VueLazyLoad, {
  loading: require('@/assets/img/common/placeholder.png')
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
