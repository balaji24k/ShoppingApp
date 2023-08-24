const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const OnlineShopItems = sequelize.define('onlineShopItem', {
  id : {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  itemName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  itemDescription: {
    type: Sequelize.STRING,
    allowNull: false
  },
  itemPrice: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  itemQuantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = OnlineShopItems;