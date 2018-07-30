//引入mutation_type常量
import {ADD_TODO, DELETE_TODO, CLEAR_ALL_COMPLETE, SELECT_ALL_TODO} from './mutation_type'

//接收要更新的状态/数据
export default {
  //添加todo
  [ADD_TODO](state, {todo}) {
    state.todos.unshift(todo)
  },
  //删除todo
  [DELETE_TODO](state, {index}) {
    state.todos.splice(index, 1)
  },
  //清除所有已完成的todo
  [CLEAR_ALL_COMPLETE](state) {
    state.todos = state.todos.filter(todo => !todo.complete)
  },
  //全选/全不选
  [SELECT_ALL_TODO](state, {isSelectAll}) {
    state.todos.forEach(todo => todo.complete = isSelectAll)
  }
}
