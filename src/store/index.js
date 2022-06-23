import Vue from "vue";
import Vuex from "vuex";
import Register from "./modules/Register";
import Pincode from "./modules/Pincode";
import Login from "./modules/Login";
import QR from "@/store/modules/QR";
import API from "@/config/API";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authUser: "",
    test: "",
  },
  getters: {},
  mutations: {
    setProfile(state, data) {
      if (state.authUser == "") {
        state.authUser = data;
      }
    },
  },
  actions: {
    async fetchProfile({ commit }) {
      let response = await API.get("profile");
      commit("setProfile", response.data);
    },
  },
  modules: { Register, Pincode, Login, QR },
});
