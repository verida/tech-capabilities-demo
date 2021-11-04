<template>
  <div>
    <div class="demo-bg">
      <h5 class="text-center">Keep Exploring</h5>
      <div class="demo-content">
        <div v-for="(demo, index) in demoCard" :key="index" class="demo-card">
          <div class="demo-card-box">
            <img :src="demo.imagePath" />
          </div>
          <hr />
          <span>{{ index === 0 ? "Previous" : "Next" }} Demo</span>
          <div>
            <router-link
              class="d-flex justify-content-between demo-card-action"
              :to="demo.link"
            >
              <h6 class="text-priamry">{{ demo.name }}</h6>
              <b-icon class="text-primary" icon="arrow-right" />
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
const { mapGetters } = createNamespacedHelpers("demoView");

export default Vue.extend({
  name: "ExploreDemo",
  computed: {
    ...mapGetters(["demoCard"]),
  },
  methods: {},
  mounted() {
    console.log(this.demoCard);
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
