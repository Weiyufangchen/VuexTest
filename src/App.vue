<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header/>
      <List/>
      <TodoFooter/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import List from './components/List'
  import Footer from './components/Footer'
  export default {

    components: {
      TodoHeader: Header,
      List,
      TodoFooter: Footer
    }
  }
</script>

<style>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
