<template>
  <div class="container">
    <app-header />
    <div class="app-layout">
      <router-view />
    </div>
    <app-footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default Vue.extend({
  name: "App",
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
});
</script>

<style lang="scss">
@import "./assets/scss/_variable.scss";

.app-layout {
  margin: 6rem 0 0 0;
}
.container {
  position: relative;
}
</style>
