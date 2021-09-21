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
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "../../assets/styles/preview.themes.css";
// import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles

export default Vue.extend({
  name: "CodePreview",
  components: {
    PrismEditor,
  },
  data() {
    return {
      code: `
      "version": "0.2.0",
  "configurations": [
    {
      "name": "Stripe: Webhooks listen",
      "type": "stripe",
      "request": "launch",
      "command": "listen",
      "forwardTo": "http://localhost:3000",
      "forwardConnectTo": "http://localhost:3000",
      "events": ["payment_intent.succeeded", "payment_intent.canceled"],
  },
  describe("Symmetric encryption", function()
      `,
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
  background: #2d2d2d;
  color: #ccc;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
  background: #11132c;
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
