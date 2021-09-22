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
    path: "/connect",
    name: "Connect",
    component: () => import("../views/Connect.vue"),
  },
  {
    path: "/SendMessage",
    name: "SendMessage",
    component: () => import("../views/SendMessage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
