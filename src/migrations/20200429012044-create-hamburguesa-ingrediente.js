'use strict';
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('HamburguesaIngredientes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    hamburguesaId: {
      type: Sequelize.INTEGER,
    },
    ingredienteId: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: true,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: true,
      type: Sequelize.DATE
    }
  });
}
export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable('HamburguesaIngredientes');
}