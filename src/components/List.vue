<template>
  <ul class="todo-main">
    <Item v-for="(todo, index) in todos" :key="index" :index="index" :todo="todo"/>
  </ul>
</template>

<script>
  //获取状态
  import {mapState} from 'vuex'
  import Item from './Item'
  export default {

    computed: {
      ...mapState(['todos'])
    },

    components: {
      Item
    }
  }
</script>

<style>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
