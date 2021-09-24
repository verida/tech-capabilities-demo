<template>
  <div>
    <prism-editor
      class="my-editor height-300"
      v-model="code"
      :highlight="highlighter"
      :line-numbers="lineNumbers"
    ></prism-editor>
  </div>
</template>

<script>
import Vue from "vue";
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";

import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "../../assets/styles/preview.themes.css";
// import "prismjs/themes/prism-okaidia.css";

export default Vue.extend({
  name: "CodePreview",
  components: {
    PrismEditor,
  },
  props: {
    code: {
      type: String,
    },
  },
  data() {
    return {
      lineNumbers: true,
    };
  },

  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    },
  },
});
</script>

<style lang="scss">
// required class
.my-editor {
  // background: #2d2d2d;
  color: #fff;
  font-size: 14px;
  padding: 5px;
  border: 1px solid #1d1f40;
  box-sizing: border-box;
  border-radius: 12px;
}

// optional
.prism-editor__textarea:focus {
  outline: none;
}

// not required:
.height-300 {
  height: 300px;
}
</style>
