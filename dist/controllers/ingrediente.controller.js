"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createingrediente = createingrediente;
exports.getingrediente = getingrediente;
exports.deleteingrediente = deleteingrediente;
exports.getOneingrediente = getOneingrediente;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import ingrediente from '../models/ingrediente';
var models = require('../models');

function createingrediente(_x, _x2) {
  return _createingrediente.apply(this, arguments);
}

function _createingrediente() {
  _createingrediente = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nombre, descripcion, path, newingrediente;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion; // Cambiar el path por la url de la pgina de heroku

            path = 'https://burgerapirest.herokuapp.com/';

            if (!(nombre != "" && descripcion != "" && nombre != null && descripcion != null)) {
              _context.next = 10;
              break;
            }

            _context.next = 5;
            return models.Ingrediente.create({
              nombre: nombre,
              descripcion: descripcion,
              path: path
            }, {
              fields: ['nombre', 'descripcion', 'path']
            });

          case 5:
            newingrediente = _context.sent;
            newingrediente.update({
              'path': path + 'ingrediente/' + newingrediente.id
            });
            return _context.abrupt("return", res.status(201).json(newingrediente));

          case 10:
            res.status(400).send('input invalido');

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createingrediente.apply(this, arguments);
}

function getingrediente(_x3, _x4) {
  return _getingrediente.apply(this, arguments);
}

function _getingrediente() {
  _getingrediente = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var ingredientes;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return models.Ingrediente.findAll({
              attributes: ['id', 'nombre', 'descripcion']
            });

          case 3:
            ingredientes = _context2.sent;
            res.status(200).json(ingredientes);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getingrediente.apply(this, arguments);
}

function deleteingrediente(_x5, _x6) {
  return _deleteingrediente.apply(this, arguments);
}

function _deleteingrediente() {
  _deleteingrediente = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, ingrediente, check;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;

            if (!isNaN(id)) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt("return", res.status(400).send('input invalido'));

          case 3:
            _context3.next = 5;
            return models.Ingrediente.findOne({
              where: {
                id: id
              }
            });

          case 5:
            ingrediente = _context3.sent;

            if (!(ingrediente === null)) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", res.status(404).send("ingrediente inexistente"));

          case 8:
            _context3.next = 10;
            return ingrediente.countHamburguesas();

          case 10:
            check = _context3.sent;

            if (!(check > 0)) {
              _context3.next = 13;
              break;
            }

            return _context3.abrupt("return", res.status(409).send("Ingrediente no se puede borrar, se encuentra presente en una hamburguesa"));

          case 13:
            ingrediente.destroy();
            return _context3.abrupt("return", res.status(200).send("ingrediente eliminado"));

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _deleteingrediente.apply(this, arguments);
}

function getOneingrediente(_x7, _x8) {
  return _getOneingrediente.apply(this, arguments);
}

function _getOneingrediente() {
  _getOneingrediente = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, check, ingrediente1;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;

            if (!isNaN(id)) {
              _context4.next = 3;
              break;
            }

            return _context4.abrupt("return", res.status(400).send('id invalido'));

          case 3:
            _context4.next = 5;
            return models.Ingrediente.findAll({
              where: {
                id: id
              }
            });

          case 5:
            check = _context4.sent;

            if (!(check.length == 0)) {
              _context4.next = 10;
              break;
            }

            res.status(404).send("ingrediente inexistente");
            _context4.next = 14;
            break;

          case 10:
            _context4.next = 12;
            return models.Ingrediente.findOne({
              where: {
                id: id
              },
              attributes: ['id', 'nombre', 'descripcion']
            });

          case 12:
            ingrediente1 = _context4.sent;
            res.status(200).json(ingrediente1);

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getOneingrediente.apply(this, arguments);
}