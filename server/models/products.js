'use strict';
module.exports = (sequelize, DataTypes) => {
  const models = sequelize.Sequelize.Model
  class products extends models { }
  products.init({
    name: DataTypes.STRING,
    image_url: DataTypes.STRING,
    price: {
      type: DataTypes.INTEGER,
      min: 1
    },
    stock: {
      type: DataTypes.INTEGER,
      min: 1
    },
    userId: DataTypes.INTEGER
  }, { sequelize })
  products.associate = function (models) {
    // associations can be defined here
    products.belongsTo(models.users)
  };
  return products;
};