import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
// import Vue from "vue/dist/vue.js";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/plugins";
import "@/assets/scss/index.scss";

import VueLivePreview from "vue-live-preview";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

// CodeMirror options
Vue.use(VueLivePreview, {
  theme: "material",
  tabSize: 2,
  lineNumbers: false,
  mode: "text/x-vue",
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
