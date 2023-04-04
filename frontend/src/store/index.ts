import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    upDisplay: {},
    scene: null,
  },
  getters: {
    getUpComponent: (state) => {
      return state.upDisplay;
    },
    getScene: (state) => {
      return state.scene;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
