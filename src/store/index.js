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
            if (state.authUser === "") {
                state.authUser = data;
            }
        },
    },
    actions: {
        fetchProfile({commit}) {
            return new Promise((resolve, reject) => {
                API.get("profile").then((response) => {
                    commit("setProfile", response.data);
                    resolve(response)
                }).catch((error) => {
                    reject(error);
                })
            })

        },
    },
    modules: {Register, Pincode, Login, QR},
});
