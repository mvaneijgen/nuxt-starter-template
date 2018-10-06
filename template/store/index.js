import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      items: [],
      errors: [],
      title: "{{ name }}",
      author: "{{ author }}",
      description: "{{ description }}",
    },
    mutations: {
      add(state, payload) {
        state.items = payload;
      },
      error(state, payload) {},
    },
  });
};

export default createStore;
