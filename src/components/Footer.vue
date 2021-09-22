<template>
  <div class="footer">
    <div class="divider mb-2" />
    <div class="footer-content d-flex justify-content-between">
      <a class="text-white" href="##">@Verida{{ date }}</a>
      <a class="text-white" href="##">Terms&Conditions</a>
    </div>
    <!-- <button @click="connect" class="btn btn-secondary btn-lg text-center">
      Connect
    </button> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import vaultConnector from "@/helpers/VaultConnector";

export default Vue.extend({
  name: "Footer",
  data() {
    return {
      date: new Date().getFullYear(),
      // loading: false,
    };
  },
  methods: {
    async connect(): Promise<void> {
      // this.loading = true;
      await vaultConnector.connectVault();
      console.log("open...");
      console.log(vaultConnector.profile);
      console.log("close...");
    },
  },
});
</script>

<style scoped lang="scss">
@import "../assets/scss/_variable.scss";

.footer-content {
  color: $text-color;
  padding: 2rem 2rem 0 2rem;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  text-decoration: none;
}

.divider {
  background: #687085;
  height: 1px;
}
</style>
