/*
包含多个计算属性(get)的对象
基于状态的计算属性
谁来读取：组件中：$store.getters.xxx
 */
export default {
  completeCount(state) {
    return state.todos.reduce((preVal, todo) => preVal + (todo.complete ? 1 : 0), 0)
  },
  totalCount(state) {
    return state.todos.length
  },

  isCheckAll(state, getters) {
    return getters.completeCount === getters.totalCount && getters.totalCount > 0
  }
}
