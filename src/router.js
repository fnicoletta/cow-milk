import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import Events from "./pages/Events.vue";
import Products from "./pages/Products";
import NotFound from './pages/NotFound.vue';
Vue.use(VueRouter);
const routes = [
  { path: "/", component: Home },
  { path: "/products", component: Products },
  { path: "/events", component: Events },
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

export default router;
