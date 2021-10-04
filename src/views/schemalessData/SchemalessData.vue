<template>
  <div>
    <div class="content">
      <content-display
        :fileContent="fileContent"
        title="Store Schemaless Data"
      />
      <code-example :descriptionContent="description" :code="codeDemo" />
      <h3 class="my-5 text-white text-center">Test this Code</h3>
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
import marked from "marked";
import ContentDisplay from "@/components/demoSection/Content.vue";
import CodeExample from "@/components/demoSection/CodeExample.vue";
import ExploreDemo from "@/components/ExploreDemoCard.vue";
import { codeDemo } from "./data";

import FileContent from "@/docs/store-schemaless-data/ContentOne.md";
import DescriptionContent from "@/docs/store-schemaless-data/ContentTwo.md";
import $store from "@/store";

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
      fileContent: null,
      description: null,
      codeDemo,
    };
  },
  methods: {
    getContent() {
      this.fileContent = marked(FileContent, { sanitize: true });
      this.description = marked(DescriptionContent, { sanitize: true });
    },
  },
  created() {
    this.getContent();
  },
  beforeRouteEnter(to, from, next) {
    next(() => {
      $store.commit("demoDisplay", {
        currentPath: to,
        prevPath: from,
      });
    });
  },
});
</script>

<style lang="scss">
@import "../../assets/scss/_variable.scss";
h3 {
  font-size: 36px;
}
</style>
