import axios from "axios";

const state = {
  todos: []
};

const getters = {
  allTodos: state => state.todos
};

const actions = {
  async getTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    commit("setTodos", response.data);
  }
};

// Mutations add to the state
const mutations = {
  // setTodos function
  // takes in state and todos
  // takes state.todos and sets it equal to todos that are passed in
  setTodos: (state, todos) => (state.todos = todos)
};

export default {
  state,
  getters,
  actions,
  mutations
};
