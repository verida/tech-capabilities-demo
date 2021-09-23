<template>
  <div class="app">
    <app-side-nav />
    <div class="container">
      <app-header />
      <div class="app-layout">
        <router-view />
      </div>
      <app-footer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppHeader from "./components/Header.vue";
import AppFooter from "./components/Footer.vue";
import AppSideNav from "@/components/navigations/SideNav.vue";

export default Vue.extend({
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AppSideNav,
  },
});
</script>

<style lang="scss">
@import "./assets/scss/_variable.scss";

.app-layout {
  margin: 6rem 0 0 0;
}

.app {
  display: flex;
}
</style>
