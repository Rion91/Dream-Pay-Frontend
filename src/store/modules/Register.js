import API from "@/config/API";
import router from "@/router";
export default {
  state: {
    credentials: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
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
    register({ state }) {
      state.errors = [];
      API.post("register", state.credentials)
        .then((response) => {
          window.localStorage.setItem("JwtToken", response.data.token);
          router.push({ name: "pincode" });
        })
        .catch((e) => {
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
