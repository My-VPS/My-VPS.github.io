import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/offers",
    name: "Offers",
    component: () =>
      import(/* webpackChunkName: "offers" */ "../views/Offers.vue"),
  },
  {
    path: "/configs",
    name: "Configs",
    component: () =>
      import(/* webpackChunkName: "configs" */ "../views/FirstConfigurations.vue"),
  },
  {
    path: "/configs/:ram/:cpu/:ssd",
    name: "Configs",
    component: () =>
      import(/* webpackChunkName: "configs" */ "../views/SecondConfigurations.vue"),
  },
  {
    path: "/checkout/:ram/:cpu/:ssd/:os/:hostname",
    name: "Checkout",
    component: () =>
      import(/* webpackChunkName: "configs" */ "../views/Checkout.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
