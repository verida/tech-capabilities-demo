<template>
  <div>
    <div class="content">
      <content-display />
      <code-example />
      <h3 class="my-5 text-white text-center">Test this Code</h3>
    </div>
    <explore-demo />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ContentDisplay from "@/components/demoSection/Content.vue";
import CodeExample from "@/components/demoSection/CodeExample.vue";
import ExploreDemo from "@/components/ExploreDemoCard.vue";

export default Vue.extend({
  name: "ContentSection",
  components: {
    ContentDisplay,
    CodeExample,
    ExploreDemo,
  },
  data() {
    return {
      loading: false,
      showCode: true,
    };
  },
  methods: {},
});
</script>

<style lang="scss">
@import "../assets/scss/_variable.scss";
h3 {
  font-size: 36px;
}
</style>
