// Import Sequelize library for `Sequelize.literal`.
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define('Burger', {
            burger_name: Sequelize.STRING,
            devoured: Sequelize.BOOLEAN,
            })
    // Return model defined.
    return Burger;
};