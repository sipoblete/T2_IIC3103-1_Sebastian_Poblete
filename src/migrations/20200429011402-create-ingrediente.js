'use strict';
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('Ingredientes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    nombre: {
      type: Sequelize.STRING,
    },
    descripcion: {
      type: Sequelize.TEXT,
    },
    path: {
      type: Sequelize.TEXT,
    }
  });
}
export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable('Ingredientes');
}