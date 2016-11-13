let Sequelize = require('sequelize');

let Post = {
  name: 'post',
  attributes: {
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
    md: Sequelize.TEXT,
    content: Sequelize.TEXT,
    image: Sequelize.STRING,
    type: Sequelize.ENUM('post', 'page'),
    category: Sequelize.STRING, // 文章在细分技术类、生活类、读书笔记等大类
    // tags
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  },
  options: {

  }
};

module.exports = Post;
