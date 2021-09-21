<template>
  <div>
    <div class="demo-bg">
      <h5 class="text-center">Keep Exploring</h5>
      <div class="d-flex justify-content-center">
        <div v-for="demo in demolist" :key="demo" class="demo-card">
          <div class="demo-card-box"></div>
          <hr />
          <span>Previous Demo</span>
          <div class="d-flex justify-content-between demo-card-action">
            <h6 class="text-priamry">Connect</h6>
            <b-icon class="text-primary" icon="arrow-right" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ExploreDemo",
  data() {
    return {
      demolist: [1, 2],
    };
  },
});
</script>

<style scoped lang="scss">
@import "../assets/scss/_variable.scss";

.demo-bg {
  // background: $bg-dark80;
  padding: 10rem 0;
}

h5 {
  font-size: 36px;
  color: $white;
  margin: 2.5rem 0;
}
.demo-card {
  width: 384px;
  height: 500px;
  margin: 0 1rem;
  &-box {
    width: 384px;
    height: 332.11px;
    background: $bg-light;
    border-radius: 8px;
  }
  span {
    color: $app-green;
  }
  hr {
    background: $bg-light;
  }
  &-action {
    h6 {
      color: $white;
      margin-top: 0.5rem;
    }
  }
}
</style>
