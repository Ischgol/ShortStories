const marked = require("marked");
const hljs = require("highlight.js");

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code, language) {
    const validLanguage = hljs.getLanguage(language) ? language : "plaintext";
    return hljs.highlight(validLanguage, code).value;
  },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

module.exports = marked;
