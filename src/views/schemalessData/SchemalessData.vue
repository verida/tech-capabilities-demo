<template>
  <div>
    <div class="content">
      <content-display title="Store Schemaless Data" />
      <code-example :code="codeDemo" />
      <h3 class="my-5 text-white text-center">Test this Code</h3>
      <div
        class="
          warning-demo
          d-flex
          justify-content-center
          align-items-center
          mt-3
          mb-5
        "
      >
        <img src="../../assets/icons/warning_icon.png" alt="warning" />
        <span class="mx-2">Run "Connect" demo first</span>
      </div>
      <iframe
        src="https://codesandbox.io/embed/store-schema-less-data-u0odj?fontsize=14&hidenavigation=1&module=%2Fsrc%2FmessagingApi.js&theme=dark"
        style="
          width: 100%;
          height: 500px;
          border: 0;
          border-radius: 4px;
          overflow: hidden;
        "
        title="store schema-less data "
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
import { codeDemo } from "./data";

export default Vue.extend({
  name: "Schemaless Data",
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
.warning-demo {
  font-size: 16px;
  line-height: 20px;

  color: #d9be36;
}
</style>
