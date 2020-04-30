'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hamburguesa = sequelize.define('Hamburguesa', {
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    descripcion: DataTypes.TEXT,
    imagen: DataTypes.TEXT
  }, {
    // freezeTableName: true,
    timestamps: false
  });
  Hamburguesa.associate = function(models) {
    // associations can be defined here
    Hamburguesa.belongsToMany(models.Ingrediente, {
              as: 'ingredientes',
              foreignKey: 'hamburguesaId',
              through: models.HamburguesaIngrediente
          });
  //   Hamburguesa.belongsToMany(models.Ingrediente, {
  //     as: 'ingredientes',
  //     through:'hamburguesaIngredientes'
  // });
    
  };
  return Hamburguesa;
};