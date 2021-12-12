import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: JSON.parse(localStorage.getItem('todoList')) || [{
      id: '141124',
      title: 'Hello',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      status: '1',
      checked: false,
    }],
  },
  getters: {
    sortedTodoList: (state) => state.todoList.sort((a, b) => b.status - a.status),
  },
  mutations: {
    addNewTodo(state, todo) {
      state.todoList.push(todo);
    },
    removeItem(state, id) {
      state.todoList = state.todoList.filter((it) => it.id !== id);
    },
  },
  actions: {
  },
  modules: {
  },
});
