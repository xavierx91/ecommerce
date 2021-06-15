const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Product = require('./Product');

class ProductTag extends Model { }

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }, product_id: {
      type: DataTypes.INTEGER,
      allowNull: false/*,
      references: 'Product',
      referencesKey: 'id'*/
    },tag_id: {
      type: DataTypes.INTEGER/*,
      references: 'Tag',
      referencesKey: 'id'*/
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
