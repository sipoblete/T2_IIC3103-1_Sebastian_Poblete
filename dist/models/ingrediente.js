'use strict';

module.exports = function (sequelize, DataTypes) {
  var Ingrediente = sequelize.define('Ingrediente', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    path: DataTypes.STRING
  }, {
    // freezeTableName: true,
    timestamps: false
  });

  Ingrediente.associate = function (models) {
    // associations can be defined here
    Ingrediente.belongsToMany(models.Hamburguesa, {
      as: 'hamburguesas',
      foreignKey: 'ingredienteId',
      through: models.HamburguesaIngrediente
    });
  };

  return Ingrediente;
};