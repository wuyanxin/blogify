const Sequelize = require('sequelize');

const Post = {
  name: 'post',
  attributes: {
    title: Sequelize.STRING,
    slug: Sequelize.STRING,
    description: Sequelize.STRING(500),
    md: Sequelize.TEXT,
    content: Sequelize.TEXT,
    image: Sequelize.STRING(300),

    type: Sequelize.ENUM('post', 'page'),
    category: Sequelize.STRING, // 文章在细分技术类、生活类、读书笔记等大类
    featured: Sequelize.BOOLEAN, // true 置顶

    // tags
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  },
  options: {

  }
};

module.exports = Post;
