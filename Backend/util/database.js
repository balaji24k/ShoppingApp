const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-practice', 'root', '246810', {
    dialect : 'mysql',
    host: 'localhost'
});


module.exports = sequelize;