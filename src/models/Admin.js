const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const Post = {
  name: 'admin',
  attributes: {
    name: {
      type: Sequelize.STRING(50), // 用户名
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(50), // 邮箱
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      set: function (value) {
        var hash = bcrypt.hashSync(value, 10);
        this.setDataValue('password', hash);
      },
    },

    // tags
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  },
  options: {

  }
};

module.exports = Post;
