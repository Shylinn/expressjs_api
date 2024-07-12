'use strict';
const {
  Model
} = require('sequelize');
const Role = require('./role'); // Import mô hình Role

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // User.belongsTo(models.Role, {
      //   foreignKey: 'code',
      //   onDelete: 'SET NULL',
      //   onUpdate: 'CASCADE'
      // });
    }
  }
  User.init({
    user: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    role_code: {
      type: DataTypes.STRING,
      references: {
        model: Role, // Tham chiếu đến mô hình Role
        key: 'code'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'

    }
  }, {
    sequelize,
    modelName: 'User',
  });




  return User;
};