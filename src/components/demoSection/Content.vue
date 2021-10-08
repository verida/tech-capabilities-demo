<template>
  <div>
    <div class="content">
      <h1 class="text-primary">{{ title }}</h1>
      <div class="text-body" v-html="content"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import marked from "marked";

export default Vue.extend({
  name: "ContentSection",
  components: {},
  data() {
    return {
      content: null,
    };
  },
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
  created() {
    this.content = marked.parse(this.fileContent);
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
    // background: #333764;
  }
}
</style>
