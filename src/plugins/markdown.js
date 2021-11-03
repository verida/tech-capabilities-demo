import marked from "marked";
import hljs from "highlight.js";

import "highlight.js/styles/atom-one-dark.css";

marked.default.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: true,
  // sanitize: true,
  smartLists: true,
  smartypants: true,
  xhtml: false,
});
