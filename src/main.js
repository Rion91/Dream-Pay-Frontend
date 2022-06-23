import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueQrcodeReader from "vue-qrcode-reader";
Vue.use(VueQrcodeReader);

// for bootstrap
import "bootstrap/dist/css/bootstrap.css";
// for fontawesome library
import { library } from "@fortawesome/fontawesome-svg-core";
// import icon class
import {
  faHouse,
  faUserSecret,
  faQrcode,
  faArrowRight,
  faBell,
  faMobileScreen,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// add icon class to library
library.add(
  faHouse,
  faUserSecret,
  faQrcode,
  faArrowRight,
  faBell,
  faMobileScreen,
  faEye
);
// create customs component
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

import "bootstrap/dist/js/bootstrap";
