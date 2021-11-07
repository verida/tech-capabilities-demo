<template>
  <div>
    <div class="demo-bg">
      <h5 class="text-center">Keep Exploring</h5>
      <div class="demo-content">
        <div v-for="(demo, index) in demoCard" :key="index" class="demo-card">
          <hr />
          <div v-if="demoCard.length === 1 && connectRoute === currentRoute">
            <router-link :to="demo.link">
              <span class="right-align"> Next Demo</span>
              <div class="d-flex justify-content-between demo-card-action">
                <h6 class="text-priamry">{{ demo.name }}</h6>
                <b-icon class="text-primary" icon="arrow-right" />
              </div>
            </router-link>
          </div>
          <div v-else-if="index === 1">
            <router-link :to="demo.link">
              <span class="right-align"
                >{{ index === 0 ? "Previous" : "Next" }} Demo</span
              >
              <div class="d-flex justify-content-between demo-card-action">
                <h6 class="text-priamry">{{ demo.name }}</h6>
                <b-icon class="text-primary" icon="arrow-right" />
              </div>
            </router-link>
          </div>
          <div v-else>
            <router-link :to="demo.link">
              <div
                class="
                  d-flex
                  align-items-center
                  justify-content-between
                  demo-card-action
                "
              >
                <b-icon class="text-primary rotated" icon="arrow-right" />
                <div class="align-items-center">
                  <span class="right-align"
                    >{{ index === 0 ? "Previous" : "Next" }} Demo</span
                  >
                  <h6 class="text-priamry">{{ demo.name }}</h6>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { createNamespacedHelpers } from "vuex";
import { routes } from "../constants/constant";

const { mapGetters } = createNamespacedHelpers("demoView");

export default Vue.extend({
  name: "ExploreDemo",
  computed: {
    ...mapGetters(["demoCard"]),
  },
  data() {
    return {
      connectRoute: routes.CONNECT,
      currentRoute: this.$route.name,
    };
  },
});
</script>

<style scoped lang="scss">
@import "../assets/scss/_variable.scss";
$mobile: 768px;

.rotated {
  transform: rotate(180deg);
}
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
    img {
      background-size: cover;
      width: 384px;
      height: 332.11px;
    }
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
