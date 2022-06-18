import API from "@/config/API";
import router from "@/router";
export default {
  state: {
    credentials: {
      email: "",
      password: "",
    },
    errors: [],
  },
  getter: {},
  mutations: {
    authUser(state, data) {
      state.credentials = data;
    },
  },
  actions: {
    login({ state }) {
      // console.log("test");
      state.errors = [];
      API.post("login", state.credentials)
        .then((response) => {
          window.localStorage.setItem("JwtToken", response.data);
          window.localStorage.setItem("pin", "success");
          router.push({ name: "home" });
        })
        .catch((e) => {
          // console.log("error");
          const statusCode = e.status;
          if (statusCode === 422) {
            const errors = e.data.errors;
            Object.keys(errors).map((error) => {
              state.errors.push(errors[error][0]);
            });
          }
          if (statusCode === 401) {
            this.errors.push("The credentials are not valid");
          }
        });
    },
  },
};
