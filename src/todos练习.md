## 整体思路
    1. 入口文件main.js
    2. 状态管理vuex
       store.js
       state.js
       mutations.js
       actions.js
       getter.js
       action_type.js
    3. 组件components 
       App主组件
       Header
       List
       Footer
       Item
    4. 功能
      1). header组件：添加todo，定义一个todo对象，然后将输入的todo对象保存到todos中
        方法：将组件内要更新的内容通过$store分发给actions对象，
            再commit(mutation_type, {todo})提交给mutations对象上对应的mutation函数来更新。
      2). Item组件：删除todo，只需要传一个删除元素的下标index，方法同上。
      3). footer组件，有如下功能：
        * 全选/全不选
        * 删除已完成的todo，即删除已经勾选的todo，根据每个todo对象上complete来判断
              
