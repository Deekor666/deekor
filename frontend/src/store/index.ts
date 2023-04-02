import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hello: "Hello",
  },
  getters: {
    getHello: (state) => {
      return state.hello;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
