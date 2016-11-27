let xss = require('xss');
let marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

/**
 * parse markdown to html
 */
function parseMarkdown(md) {
  return marked(xss(md));
}

function create(post) {
  post.content = parseMarkdown(post.md);
  return Post.create(post);
}

module.exports = {
  create,
}
