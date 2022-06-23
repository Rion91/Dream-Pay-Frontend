import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView";
import RegisterView from "@/views/RegisterView";
import TestView from "@/views/TestView";
import PincodeView from "@/views/PincodeView";
import QRView from "@/views/QRView";
import ScannerView from "@/views/ScannerView";
import ErrorView from "@/views/ErrorView"
import API from "@/config/API";
import authMiddleware from "@/middlewares/authMiddleware";
import checkIfPinWasSetMiddleware from "@/middlewares/checkIfPinWasSetMiddleware";
import LevelUpView from "@/views/LevelUpView";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        beforeEnter: checkIfPinWasSetMiddleware
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
        beforeEnter: checkIfPinWasSetMiddleware
    },
    {
        path: "/qrcode",
        name: "qrcode",
        component: QRView,
        beforeEnter: checkIfPinWasSetMiddleware
    },
    {
        path: "/scanner",
        name: "scanner",
        component: ScannerView,
        beforeEnter: checkIfPinWasSetMiddleware
    },
    {
        path: "*",
        name: "error",
        component: ErrorView,
    },
    {
        path: "/upgrade_level",
        name: "upgrade",
        component: LevelUpView,
        beforeEnter: checkIfPinWasSetMiddleware

    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});


// Auth
router.beforeEach(authMiddleware)

/*router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        API.get("profile")
            .then((response) => {
                if (!response.data.pin) {
                    next();
                } else {
                    next({name: "home"});
                }
            })
            .catch((error) => {
                console.log(error);
                next({name: "login"});
            });
    } else if (to.matched.some((record) => record.meta.requiresVisitor)) {
        let auth = localStorage.getItem("JwtToken");
        if (!auth) {
            next();
        } else {
            next({name: "pincode"});
        }
    } else if (to.path === "/") {
        let auth = localStorage.getItem("JwtToken");
        if (auth) {
            next();
            // eslint-disable-next-line no-dupe-else-if
        } else {
            next({name: "pincode"});
        }
    } else {
        next();
    }
});*/


export default router;
