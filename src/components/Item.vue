<template>
  <li :style="{backgroundColor: bgColor}"
      @mouseenter="handleEnter(true)"
      @mouseleave="handleEnter(false)"
  >
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
  export default {
    //声明接收到的todo
    props: {
      todo: Object,  //指定属性名和属性值的类型
      index: Number
    },
    data() {
      return {
        bgColor: '#fff',
        isShow: false  //默认不显示删除按钮
      }
    },
    methods: {
      handleEnter(isEnter) {
        if (isEnter) {  //表示进入li
          this.isShow = true
          this.bgColor = '#aaa'
        } else {
          this.isShow = false
          this.bgColor = '#fff'
        }
      },
      deleteItem() {
        if (window.confirm(`您确认删除 ${this.todo.title} 吗？`)) {
          this.$store.dispatch('deleteTodo', this.index)
        }
      }
    }
  }
</script>

<style>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
