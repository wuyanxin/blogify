const xss = require('xss');
const marked = require('marked');
const slug = require('limax');

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
  post.slug = post.slug || slug(post.title, { tone: false });
  return Post.create(post);
}

function update(post) {
  post.content = parseMarkdown(post.md);
  post.slug = post.slug || slug(post.title, { tone: false });
  return Post.update(post, {
    where: { id: post.id },
  });
}

module.exports = {
  create,
  update,
}
