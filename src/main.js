import Vue from 'vue'

import App from './App'
import store from './vuex/store'
import './main.css'
new Vue({
  el: '#app',
  /*components: {
    App
  },
  template: '<App/>',*/
  render: h => h(App), //接收一个函数，创建<App/>
  store  //注册全局的store对象，给所有组件对象添加一个属性：$store
})
