<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll"/>
    </label>
    <span>
          <span>已完成{{completeCount}}</span> / 全部{{totalCount}}
        </span>
    <button class="btn btn-danger" v-show="completeCount" @click="clearAllComplete">清除已完成任务</button>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {

    computed: {
      completeCount() {
        return this.$store.state.todos.reduce((preVal, todo) => preVal + (todo.complete ? 1 : 0), 0)
      },
      totalCount() {
        return this.$store.state.todos.length
      },

      isCheckAll() {
        return this.completeCount === this.totalCount && this.totalCount > 0
      },
      checkAll: {
        get() {
          return this.isCheckAll
        },
        set(value) {
          this.$store.dispatch('selectAll', value)
        }
      }
    },
    methods: {
      clearAllComplete() {
        this.$store.dispatch('clearAllComplete')
      }
    }
  }
</script>

<style>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
