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
    name: "Send Message",
    component: () => import("../views/sendMessage/SendMessage.vue"),
  },
  {
    path: "/schemaless-data",
    name: "Store Schemaless Data",
    component: () => import("../views/schemalessData/SchemalessData.vue"),
  },
  {
    path: "/store-data",
    name: "Store Data ",
    component: () => import("../views/storeData/StoreData.vue"),
  },
  {
    name: "Share Data",
    path: "/share-data",
    component: () => import("../views/shareData/ShareData.vue"),
  },
  {
    name: "Request Data",
    path: "/request-data-respond",
    component: () => import("../views/requestData/RequestData.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
