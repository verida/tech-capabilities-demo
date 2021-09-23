<template>
  <div>
    <div class="content">
      <content-display />
      <code-example :code="codeDemo" />
      <h3 class="my-5 text-white text-center">Test this Code</h3>
      <iframe
        src="https://codesandbox.io/embed/damp-fire-66muh?fontsize=13&theme=dark"
        style="
          width: 100%;
          height: 500px;
          border: 0;
          border-radius: 12px;
          overflow: hidden;
        "
        title="verida connect demo"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </div>
    <explore-demo />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ContentDisplay from "@/components/demoSection/Content.vue";
import CodeExample from "@/components/demoSection/CodeExample.vue";
import ExploreDemo from "@/components/ExploreDemoCard.vue";
import { connectCodeTemplate as codeDemo } from "./data";

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
      codeDemo,
    };
  },
  methods: {},
});
</script>

<style lang="scss">
@import "../../assets/scss/_variable.scss";
h3 {
  font-size: 36px;
}
</style>
