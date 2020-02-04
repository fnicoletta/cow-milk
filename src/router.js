import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import Events from "./pages/Events.vue";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Register from './pages/Register';
import NotFound from './pages/NotFound.vue';
import { cookieFunctions } from '@/mixins/cookiesMixin';
Vue.use(VueRouter);
const routes = [
  { path: "/", component: Home },
  { path: "/products", component: Products },
  { path: "/events", component: Events },
  { path: "/login", component: Login, meta : { guest: true } },
  { path: "/register", component: Register, meta : { guest: true } },
  {
    path: "/*",
    component: NotFound
  }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode: "history",
  base: __dirname,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes // short for `routes: routes`
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!cookieFunctions.getCookie("jwt-token")) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath }
      });
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (!cookieFunctions.getCookie("jwt-token")) {
      next();
    } else {
      next({ path: "/" });
    }
  } else {
    next();
  }
});

export default router;
