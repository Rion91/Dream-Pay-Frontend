// import API from "@/config/API";
import API from "@/config/API";
import router from "@/router";

export default {
  state: {
    pin: "",
  },
  getters: {},
  mutations: {},
  actions: {
    storePin({ state }) {
      // eslint-disable-next-line no-undef
      API.put("pin", { pin: state.pin })
        .then(() => {
          router.push({
            name: "home",
          });
        })
        .catch(() => console.log("error"));
    },
  },
};
