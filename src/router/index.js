import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView";
import RegisterView from "@/views/RegisterView";
import TestView from "@/views/TestView";
import PincodeView from "@/views/PincodeView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    // meta: {
    //   requiresAuth: true,
    // },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      requiresVisitor: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
    meta: {
      requiresVisitor: true,
    },
  },
  {
    path: "/test",
    name: "test",
    component: TestView,
  },
  {
    path: "/pincode",
    name: "pincode",
    component: PincodeView,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    let auth = localStorage.getItem("JwtToken");
    let pin = localStorage.getItem("pin");
    if (auth && !pin) {
      next();
    } else {
      next({ name: "login" });
    }
  } else if (to.matched.some((record) => record.meta.requiresVisitor)) {
    let auth = localStorage.getItem("JwtToken");
    if (!auth) {
      next();
    } else {
      next({ name: "home" });
    }
  } else if (to.path === "/") {
    let auth = localStorage.getItem("JwtToken");
    let pin = localStorage.getItem("pin");
    if (auth && pin) {
      next();
      // eslint-disable-next-line no-dupe-else-if
    } else {
      next({ name: "pincode" });
    }
  } else {
    next();
  }
});

export default router;

// console.log(to);
// if (to.matched.some((record) => record.meta.requiresAuth)) {
//   let auth = localStorage.getItem("JwtToken");
//   let pin = localStorage.getItem("pin");
//   if (auth && !pin) {
//     next();
//   } else {
//     next({
//       path: "/",
//     });
//   }
// } else if (to.matched.some((record) => record.meta.requiresVisitor)) {
//   let auth = localStorage.getItem("JwtToken");
//   let pin = localStorage.getItem("pin");
//
//   if (!auth && !pin) {
//     next();
//     // eslint-disable-next-line no-dupe-else-if
//   } else {
//     next({
//       name: "login",
//     });
//   }
// } else if (to.path === "/") {
//   let auth = localStorage.getItem("JwtToken");
//   let pin = localStorage.getItem("pin");
//
//   if (auth && pin) {
//     next();
//   } else {
//     next({
//       name: "pincode",
//     });
//   }
//   // eslint-disable-next-line no-dupe-else-if
// } else {
//   next(); // make sure to always call next()!
// }
