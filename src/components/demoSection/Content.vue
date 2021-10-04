<template>
  <div>
    <div class="content">
      <h1 class="text-primary">{{ title }}</h1>
      <div class="text-body" v-html="fileContent"></div>
      <div class="content-image text-center mb-4">
        <img class="img-fluid" src="../../assets/images/carousel.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ContentSection",
  components: {},
  props: {
    title: {
      type: String,
      default: "Connect",
    },
    fileContent: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/_variable.scss";

.content {
  h1 {
    margin: 0 0 3rem 0;
    font-size: 48px;
  }
  .text-body {
    font-weight: 300;
    font-size: 18px;
    letter-spacing: -0.03em;
    color: #b8b8b8 !important;
  }
}
</style>
