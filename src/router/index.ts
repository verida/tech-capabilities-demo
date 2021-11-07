import { routes as AppRoutesNames } from "@/constants/constant";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: AppRoutesNames.HOME,
    component: Home,
  },
  {
    path: "/connect",
    name: AppRoutesNames.CONNECT,
    component: () => import("../views/connect/Connect.vue"),
  },
  {
    path: "/send-message",
    name: AppRoutesNames.MESSAGE,
    component: () => import("../views/sendMessage/SendMessage.vue"),
  },
  {
    path: "/schemaless-data",
    name: AppRoutesNames.SCHEMALESS,
    component: () => import("../views/schemalessData/SchemalessData.vue"),
  },
  {
    path: "/store-data",
    name: AppRoutesNames.SCHEMAS,
    component: () => import("../views/storeData/StoreData.vue"),
  },
  {
    path: "/share-data",
    name: AppRoutesNames.SHARE_DATA,
    component: () => import("../views/shareData/ShareData.vue"),
  },
  {
    path: "/request-data-respond",
    name: AppRoutesNames.REQUEST_DATA,
    component: () => import("../views/requestData/RequestData.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
