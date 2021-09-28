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
    component: () => import("../views/connect/Connect.vue"),
  },
  {
    path: "/send-message",
    name: "send-message",
    component: () => import("../views/sendMessage/SendMessage.vue"),
  },
  {
    path: "/schemaless-data",
    name: "schemaless-data",
    component: () => import("../views/schemalessData/SchemalessData.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
