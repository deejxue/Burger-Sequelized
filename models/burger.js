module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define('burgers', {
      burger_name: {
        type: DataTypes.STRING,
        unique: true
      },
     devoured: {
       type: DataTypes.BOOLEAN,
       defaultValue: 0
     }
  });
  return burger;
};