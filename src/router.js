import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import Events from "./pages/Events.vue";
import Products from "./pages/Products";
import ProductView from "./pages/ProductView";
import NotFound from './pages/NotFound.vue';
import Cart from './pages/Cart.vue'
import Contact from '@/pages/Contact.vue'
import {
  cookieFunctions
} from '@/mixins/cookiesMixin';
Vue.use(VueRouter);
const routes = [{
    path: "/",
    component: Home
  },
  {
    path: "/products",
    component: Products
  },
  {
    path: "/products/:product",
    component: ProductView,
    name: "product"
  },
  {
    path: "/events",
    component: Events
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: '/contact',
    component: Contact
  },
  // { path: "/login", component: Login, meta : { guest: true } },
  // { path: "/register", component: Register, meta : { guest: true } },
  {
    path: "/*",
    component: NotFound
  },

];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode: "history",
  base: __dirname,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  },
  routes // short for `routes: routes`
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!cookieFunctions.getCookie("jwt-token")) {
      next({
        path: "/login",
        params: {
          nextUrl: to.fullPath
        }
      });
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (!cookieFunctions.getCookie("jwt-token")) {
      next();
    } else {
      next({
        path: "/"
      });
    }
  } else {
    next();
  }
});

export default router;