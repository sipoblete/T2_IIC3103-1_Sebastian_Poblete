'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Hamburguesas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
  
      },
      precio: {
        type: Sequelize.INTEGER,
      
      },
      descripcion: {
        type: Sequelize.TEXT,
     
      },
      imagen: {
        type: Sequelize.TEXT,
       
      },
    
      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Hamburguesas');
  }
};