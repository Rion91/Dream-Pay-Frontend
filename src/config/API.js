import axios from "axios";
import router from "@/router";


let API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});


API.interceptors.request.use(config => {
  config.headers.Authorization = window.localStorage.getItem('JwtToken');
  return config;
}, (error) => {
  console.log(error);
})

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      window.localStorage.clear('JwtToken')
      router.push({ name: "login" });
    }
    return Promise.reject(error.response);
  }
);


export default API;
