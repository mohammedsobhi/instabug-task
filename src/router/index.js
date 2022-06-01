import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "../views/WelcomeView.vue";
import LoginView from "../views/LoginView.vue";
import NotFoundView from "../views/NotFoundView.vue";

import { isAuthorized } from "../utils/isAuth.js";

const routes = [
  {
    path: "/welcome",
    name: "welcome",
    component: WelcomeView,
    alias: "/",
    meta: {
      allowAnonymous: false,
      title: "Welcome | Instabug",
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      allowAnonymous: true,
      title: "Login | Instabug",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: NotFoundView,
    meta: {
      allowAnonymous: true,
      title: "404 | Instabug",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

router.beforeEach((to, from, next) => {
  if (to.name == "login" && isAuthorized()) {
    next({
      path: "/welcome",
    });
  } else if (!to.meta.allowAnonymous && !isAuthorized()) {
    next({
      path: "/login",
    });
  } else {
    next();
  }
});

export default router;
