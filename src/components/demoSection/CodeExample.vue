<template>
  <div>
    <div class="code-example">
      <code-preview :code="code" class="my-5" />
      <div class="text-body" v-html="descriptionContent"></div>
      <div class="content-image text-center mb-4">
        <img class="img-fluid" src="../../assets/images/carousel.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CodePreview from "./Editor.vue";

export default Vue.extend({
  name: "CodeExample",
  props: {
    code: {
      type: String,
    },
    descriptionContent: {
      type: String,
    },
  },
  components: {
    "code-preview": CodePreview,
  },
  methods: {},
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/_variable.scss";
.code-example {
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
