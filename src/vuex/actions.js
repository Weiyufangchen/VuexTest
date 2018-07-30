//接收要更新的状态
export default {
  //添加todo
  addTodo({commit}, todo) {
    //提交给mutations对象
    //commit()向mutation传递的是包含数据的对象，不是数据本身
    commit('add_todo', {todo})
  },
  //删除todo
  deleteTodo({commit}, index) {
    commit('delete_todo', {index})
  }
}
