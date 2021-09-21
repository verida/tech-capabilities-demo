<template>
  <div class="d-flex justify-content-between mt-3">
    <a href="/" class="text-decoration-none">
      <img height="40" src="../assets/images/Logo.svg" alt="verida-logo" />
    </a>
    <div class="d-flex justify-content-between">
      <div />
      <b-dropdown
        id="dropdown-1"
        variant="bg-dark100"
        text="Connect"
        class="demo-select"
      >
        <b-dropdown-item aria-selected="true"
          ><img
            class="select-image"
            src="../assets/icons/link.svg"
            alt="link"
          />Connect
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
});
</script>

<style scoped lang="scss">
@import "../assets/scss/_variable.scss";
.nav {
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #f3f3f3;
}

.select-image {
  margin: 0 0.4rem 0 -1.3rem;
}

.demo-select {
  border: 1px solid $white;
  color: $primary;
  outline: none;
  border-radius: $border-radius;
}
</style>
