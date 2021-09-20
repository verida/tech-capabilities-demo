<template>
  <div>
    <div class="content">
      <content-display />
      <code-example />
      <explore-demo />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Content from "@/components/demoSection/Content.vue";
import CodeExample from "@/components/demoSection/CodeExample.vue";
import Header from "@/components/Header.vue";
import ExploreDemo from "@/components/ExploreDemoCard.vue";

export default Vue.extend({
  name: "ContentSection",
  components: {
    "content-display": Content,
    "code-example": CodeExample,
    "explore-demo": ExploreDemo,
  },
  data() {
    return {
      Header,
      // make DatePicker available in template
    };
  },
});
</script>

<style scoped lang="scss">
// @import "../../assets/scss/_variable.scss";
</style>
