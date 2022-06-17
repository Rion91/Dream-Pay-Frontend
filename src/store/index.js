import Vue from "vue";
import Vuex from "vuex";
import Register from "./modules/Register";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { Register },
});
