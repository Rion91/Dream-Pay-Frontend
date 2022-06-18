import Vue from "vue";
import Vuex from "vuex";
import Register from "./modules/Register";
import Pincode from "./modules/Pincode";
import Login from "./modules/Login";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { Register, Pincode, Login },
});
