import API from "@/config/API";
import router from "@/router";

export default {
  state: {
    credentials: {
      email: "",
      password: "",
    },
    errors: [

    ],
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

          window.localStorage.setItem("JwtToken", `Bearer ${response.data}`);
          console.log("hello");
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
            state.errors.push("The credentials are not valid");
          }
        });
    },
  },
};
