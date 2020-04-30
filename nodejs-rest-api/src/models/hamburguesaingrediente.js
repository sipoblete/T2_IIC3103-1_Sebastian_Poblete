'use strict';
module.exports = (sequelize, DataTypes) => {
  const HamburguesaIngrediente = sequelize.define('HamburguesaIngrediente', {
    hamburguesaId: DataTypes.INTEGER,
    ingredienteId: DataTypes.INTEGER
  }, {
    // freezeTableName: true,
    timestamps: false
  });
  HamburguesaIngrediente.associate = function(models) {
    // associations can be defined here
      
    HamburguesaIngrediente.belongsTo(models.Hamburguesa, {foreignKey: 'hamburguesaId'});
    HamburguesaIngrediente.belongsTo(models.Ingrediente, {foreignKey: 'ingredienteId'});
  };
  return HamburguesaIngrediente;
};