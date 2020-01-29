import Vue from "vue";
import VueRouter from "vue-router";
import Products from './pages/Products'
Vue.use(VueRouter);
const routes = [
  { path: "/", component: Products },
  { path: "/products", component: Products },
  { path: "/bar", component: Products }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes // short for `routes: routes`
});

export default router