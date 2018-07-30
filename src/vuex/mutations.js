//接收要更新的状态/数据
export default {
  //添加todo
  ['add_todo'](state, {todo}) {
    state.todos.unshift(todo)
  },
  ['delete_todo'](state, {index}) {
    state.todos.splice(index, 1)
  }
}
