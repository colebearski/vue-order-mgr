import axios from "axios";

const state = {
  todos: [
    {
      id: 1,
      title: "Pet Java"
    },
    {
      id: 2,
      title: "Play with Java"
    }
  ]
};

const getters = {
  allTodos: state => state.todos
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
