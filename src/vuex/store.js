/*
vuex最核心的store对象
 */
import Vue from 'vue'
import Vuex from 'vuex'
//声明使用vuex
Vue.use(Vuex)

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  todos: []
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
