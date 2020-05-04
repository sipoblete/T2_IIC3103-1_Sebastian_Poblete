'use strict';
require('dotenv').config()
import pgp from "pg-promise";
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

let config;
if (env==="development") {
  config = require(__dirname + '/../config/config.json')[env]
}
// const db = {};
const db = pgp(process.env.DATABASE_URL || "postgres://localhost:5432/postgres")

let sequelize;

if (env==="production") {
  sequelize = new Sequelize(process.env["DATABASE_URL"], {});
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;