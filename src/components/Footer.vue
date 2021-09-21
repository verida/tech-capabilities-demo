<template>
  <div class="footer">
    <div class="divider mb-2" />
    <div class="footer-content d-flex justify-content-between">
      <a href="##">@Verida{{ date }}</a>
      <a href="##">Terms&Conditions</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer",
  data() {
    return {
      date: new Date().getFullYear(),
    };
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
}

.divider {
  background: #687085;
  height: 1px;
}
</style>
