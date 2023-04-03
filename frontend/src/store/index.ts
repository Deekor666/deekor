import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    upDisplay: {},
  },
  getters: {
    getUpComponent: (state) => {
      return state.upDisplay;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
