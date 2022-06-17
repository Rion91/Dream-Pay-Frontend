import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView";
import RegisterView from "@/views/RegisterView";
import TestView from "@/views/TestView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: true },
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    let auth = localStorage.getItem("JwtToken");
    if (!auth) {
      next({
        path: "/login",
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresVisitor)) {
    let auth = localStorage.getItem("JwtToken");
    if (auth) {
      next({
        path: "/",
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
