<template>
  <div>
    <div class="content">
      <content-display title="Connect" :fileContent="fileContent" />
      <h3 class="my-5 text-white text-center">Test this Code</h3>
      <iframe
        src="https://codesandbox.io/embed/tech-capabilites-demo-v1-27tqk?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fdemo-js%2Fconnect.js&theme=dark"
        style="
          width: 100%;
          height: 500px;
          border: 0;
          border-radius: 4px;
          overflow: hidden;
        "
        title="tech capabilites demo (v1)"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </div>
    <explore-demo />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { createNamespacedHelpers } from "vuex";
import ContentDisplay from "@/components/demoSection/Content.vue";
import ExploreDemo from "@/components/ExploreDemoCard.vue";
import FileContent from "@/docs/connect/content.md";
import { scrollToTop } from "@/helpers/utils";

const { mapMutations } = createNamespacedHelpers("demoView");

export default Vue.extend({
  name: "ContentSection",
  components: {
    ContentDisplay,
    ExploreDemo,
  },
  data() {
    return {
      loading: false,
      showCode: true,
      fileContent: FileContent,
    };
  },
  methods: {
    ...mapMutations(["navigate"]),
  },

  mounted() {
    this.navigate({
      currentPath: this.$route.name,
    });
    scrollToTop();
  },
});
</script>

<style lang="scss">
@import "../../assets/scss/_variable.scss";
h3 {
  font-size: 36px;
}
</style>
