<template>
  <div>
    <div class="demo-bg">
      <h5 class="text-center">Keep Exploring</h5>
      <div class="demo-content">
        <div v-for="(demo, index) in demos" :key="index" class="demo-card">
          <div class="demo-card-box"></div>
          <hr />
          <span>{{ index === 0 ? "Previous" : "Current" }}Demo</span>
          <div class="d-flex justify-content-between demo-card-action">
            <h6 class="text-priamry">{{ demo.name }}</h6>
            <router-link :to="demo.link">
              <b-icon class="text-primary" icon="arrow-right" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { TLinks } from "@/interface";
import Vue from "vue";

interface IData {
  demos: TLinks[];
}

export default Vue.extend({
  name: "ExploreDemo",
  data(): IData {
    return {
      demos: [],
    };
  },
  mounted() {
    this.demos = [this.$store.state.demos.prev, this.$store.state.demos.next];
  },
});
</script>

<style scoped lang="scss">
@import "../assets/scss/_variable.scss";
$mobile: 768px;

.demo-bg {
  padding: 10rem 0;
}

.demo-content {
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: $mobile) {
    flex-direction: column;
  }
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
