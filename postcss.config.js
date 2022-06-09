module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,  // 视图的宽度，对应的是我们设计稿的宽度  1px => 2px    750   iPhone6(750*1334)
      viewportHeight: 667, // 视图的高度，对应的是我们设计稿的高度. (也可以不配置)   1334
      unitPrecision: 5,    // 指定`px`转换为视窗单位值的小数位数 (很多时候无法整除)
      viewportUnit: 'vw',  // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['ignore', 'tab-bar'], // 指定不需要转换的类 (里面放的是对应组件中的类名) 是按照正则去匹配
      minPixelValue: 1,    // 小于或等于1px的不转换成视窗单位
      mediaQuery: false,    // 允许在媒体查询中转换`px`
      exclude: [/TabBar\.vue$/]   // 指定不需要转换的组件 (里面放的是组件的名称)  必须是正则的形式
    }
  }
}

// 1. 在js中使用正则: /正则的相关规则/
// 2. exclude中存放的元素必须是正则表达式
// 3. 按照排除的文件写对应的正则 