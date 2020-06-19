var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  title: 'Lantern UI',
  description: 'Lantern UI',
  head: [
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js'
    }],
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js'
    }],
  ],
  plugins: [
    'demo-block'
  ],
  chainWebpack: config => {
    return {
      rules: [{
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.md$/,
          use: [
            'vue-loader',
            {
              loader: require.resolve('./public/common/mdloader')
            }
          ],
        }
      ]
    }
  },
  //   head: [
  //     ['script', { src: './public/common/mdloader.js' }],
  //   ],
  themeConfig: {
    sidebarDepth: 0,
    nav: [{
      text: '首页',
      link: '/',
      component: '/document/install.md',
    }, ],
    sidebar: [{
        title: '入门',
        children: [
          ['/document/install.md', '安装'],
          ['/document/start.md', '快速上手'],
        ]
      }, {
        title: '组件文档',
        children: [
          ['/document/color.md', 'Color 标准色'],
          ['/document/layout.md', 'Layout 布局容器'],
          ['/document/menu.md', 'Menu 导航菜单'],
          // '/document/scroll.md',
          ['/document/message.md', 'Message 消息通知'],
          //   ['/document/pagination.md', 'Pagination 分页'],
          //   ['/document/icon.md', 'Ico 图标'],
          //   ['/document/select.md', 'Select 选择器'],
          //   ['/document/form.md', 'Form 表单'],
          //   ['/document/input.md', 'Input 输入框'],
          //   ['/document/inputNumber.md', 'InputNumber 数字输入框'],
          //   ['/document/poptip.md', 'Poptip 气泡提示'],
          //   ['/document/tooltip.md', 'Tooltip 文字提示'],
          //   ['/document/checkbox.md', 'Checkbox 多选框'],
          //   ['/document/button.md', 'Button 按钮'],
          //   ['/document/radio.md', 'Radio 单选框'],
          //   ['/document/slider.md', 'Slider 滑块'],
          //   ['/document/switch.md', 'Wwitch 开关'],
          //   ['/document/breadcrumb.md', 'Breadcrumb 面包屑'],
          //   ['/document/dropdown.md', 'Dropdown 下拉菜单'],
          //   ['/document/modal.md', 'Modal 弹框'],
          //   ['/document/steps.md', 'Steps 步骤条'],
          //   ['/document/progress.md', 'Progress 进度条'],
          //   ['/document/carousel.md', 'Carousel 轮播图'],
          //   ['/document/selector.md', 'Selector 选择器'],
          //   ['/document/time.md', 'Time 相对时间'],
        ]

      },
      //   {
      //     title: '规范文档',
      //     children: [
      //       ['/document/classstandard.md', 'class 命名规范']
      //     ],
      //   }

    ]
  },
}