"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHamburguesa = createHamburguesa;
exports.getHamburguesa = getHamburguesa;
exports.getOnehamburguesa = getOnehamburguesa;
exports.deleteHamburguesa = deleteHamburguesa;
exports.updatehamburguesa = updatehamburguesa;
exports.addingrediente = addingrediente;
exports.delingrediente = delingrediente;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import Hamburguesa from '../models/hamburguesa';
// import Ingrediente from '../models/ingrediente';
// import { INTEGER } from 'sequelize/types';
// import HamburguesaIngrediente from '../models/hamburguesaingrediente';
var models = require('../models');

function createHamburguesa(_x, _x2) {
  return _createHamburguesa.apply(this, arguments);
}

function _createHamburguesa() {
  _createHamburguesa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nombre, precio, descripcion, imagen, newhmburguesa;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, precio = _req$body.precio, descripcion = _req$body.descripcion, imagen = _req$body.imagen;

            if (!(nombre != "" && precio != "" && descripcion != "" && imagen != "" && nombre != null && precio != null && descripcion != null && imagen != null)) {
              _context.next = 8;
              break;
            }

            _context.next = 4;
            return models.Hamburguesa.create({
              nombre: nombre,
              precio: precio,
              descripcion: descripcion,
              imagen: imagen
            }, {
              fields: ['nombre', 'precio', 'descripcion', 'imagen']
            });

          case 4:
            newhmburguesa = _context.sent;
            return _context.abrupt("return", res.status(201).json(newhmburguesa));

          case 8:
            res.status(400).send('input invalido');

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createHamburguesa.apply(this, arguments);
}

function getHamburguesa(_x3, _x4) {
  return _getHamburguesa.apply(this, arguments);
}

function _getHamburguesa() {
  _getHamburguesa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var hamburguesas;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return models.Hamburguesa.findAll({
              include: [{
                model: models.Ingrediente,
                as: "ingredientes",
                attributes: ["path"],
                through: {
                  attributes: []
                }
              }]
            });

          case 3:
            hamburguesas = _context2.sent;
            console.log(hamburguesas);
            res.status(200).json(hamburguesas);
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _getHamburguesa.apply(this, arguments);
}

function getOnehamburguesa(_x5, _x6) {
  return _getOnehamburguesa.apply(this, arguments);
}

function _getOnehamburguesa() {
  _getOnehamburguesa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, check, hamburguesa1;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;

            if (!isNaN(id)) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt("return", res.status(400).send('id invalido'));

          case 3:
            _context3.next = 5;
            return models.Hamburguesa.findAll({
              where: {
                id: id
              }
            });

          case 5:
            check = _context3.sent;

            if (!(check.length == 0)) {
              _context3.next = 10;
              break;
            }

            res.status(404).send("hamburguesa inexistente");
            _context3.next = 14;
            break;

          case 10:
            _context3.next = 12;
            return models.Hamburguesa.findOne({
              where: {
                id: id
              },
              include: [{
                model: models.Ingrediente,
                as: "ingredientes",
                attributes: ["path"],
                through: {
                  attributes: []
                }
              }]
            });

          case 12:
            hamburguesa1 = _context3.sent;
            res.status(200).json(hamburguesa1);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getOnehamburguesa.apply(this, arguments);
}

function deleteHamburguesa(_x7, _x8) {
  return _deleteHamburguesa.apply(this, arguments);
}

function _deleteHamburguesa() {
  _deleteHamburguesa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, check;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;

            if (!isNaN(id)) {
              _context4.next = 3;
              break;
            }

            return _context4.abrupt("return", res.status(400).send('input invalido'));

          case 3:
            _context4.next = 5;
            return models.Hamburguesa.findAll({
              where: {
                id: id
              }
            });

          case 5:
            check = _context4.sent;

            if (check.length == 0) {
              res.status(404).send("hamburguesa inexistente");
            } else {
              models.Hamburguesa.destroy({
                where: {
                  id: id
                }
              });
              res.status(200).send("hamburguesa eliminada");
            }

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deleteHamburguesa.apply(this, arguments);
}

function updatehamburguesa(_x9, _x10) {
  return _updatehamburguesa.apply(this, arguments);
}

function _updatehamburguesa() {
  _updatehamburguesa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, nombre, precio, descripcion, imagen, check;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombre = _req$body2.nombre, precio = _req$body2.precio, descripcion = _req$body2.descripcion, imagen = _req$body2.imagen;

            if (!isNaN(id)) {
              _context6.next = 4;
              break;
            }

            return _context6.abrupt("return", res.status(400).send('Parametros invalidos'));

          case 4:
            _context6.next = 6;
            return models.Hamburguesa.findAll({
              where: {
                id: id
              }
            });

          case 6:
            check = _context6.sent;

            if (!(check.length == 0)) {
              _context6.next = 11;
              break;
            }

            res.status(404).send("Hamburguesa inexistente");
            _context6.next = 17;
            break;

          case 11:
            if (!(nombre != "" && precio != "" && descripcion != "" && imagen != "" && nombre != null && precio != null && descripcion != null && imagen != null)) {
              _context6.next = 16;
              break;
            }

            check.forEach( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(hamburguesa2) {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return hamburguesa2.update({
                          nombre: nombre,
                          precio: precio,
                          descripcion: descripcion,
                          imagen: imagen
                        });

                      case 2:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function (_x15) {
                return _ref.apply(this, arguments);
              };
            }());
            return _context6.abrupt("return", res.status(200).json(check));

          case 16:
            return _context6.abrupt("return", res.status(400).send('Parametros invalidos'));

          case 17:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _updatehamburguesa.apply(this, arguments);
}

function addingrediente(_x11, _x12) {
  return _addingrediente.apply(this, arguments);
}

function _addingrediente() {
  _addingrediente = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var idh, idi, hamburguesa, ingrediente;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            idh = req.params.idh;
            idi = req.params.idi;

            if (!(isNaN(idh) || isNaN(idi))) {
              _context7.next = 4;
              break;
            }

            return _context7.abrupt("return", res.status(400).send('input invalido'));

          case 4:
            _context7.next = 6;
            return models.Hamburguesa.findOne({
              where: {
                id: idh
              }
            });

          case 6:
            hamburguesa = _context7.sent;

            if (!(hamburguesa === null)) {
              _context7.next = 9;
              break;
            }

            return _context7.abrupt("return", res.status(404).send('Hamburguesa inexistente'));

          case 9:
            _context7.next = 11;
            return models.Ingrediente.findOne({
              where: {
                id: idi
              }
            });

          case 11:
            ingrediente = _context7.sent;

            if (!(ingrediente === null)) {
              _context7.next = 14;
              break;
            }

            return _context7.abrupt("return", res.status(404).send('Ingrediente inexistente'));

          case 14:
            hamburguesa.addIngrediente(ingrediente);
            return _context7.abrupt("return", res.status(201).send('Ingrediente agregado'));

          case 16:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _addingrediente.apply(this, arguments);
}

function delingrediente(_x13, _x14) {
  return _delingrediente.apply(this, arguments);
}

function _delingrediente() {
  _delingrediente = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var idh, idi, hamburguesa, ingrediente, check;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            idh = req.params.idh;
            idi = req.params.idi;

            if (!(isNaN(idh) || isNaN(idi))) {
              _context8.next = 4;
              break;
            }

            return _context8.abrupt("return", res.status(400).send('input invalido'));

          case 4:
            _context8.next = 6;
            return models.Hamburguesa.findOne({
              where: {
                id: idh
              }
            });

          case 6:
            hamburguesa = _context8.sent;

            if (!(hamburguesa === null)) {
              _context8.next = 9;
              break;
            }

            return _context8.abrupt("return", res.status(404).send('Hamburguesa inexistente'));

          case 9:
            _context8.next = 11;
            return models.Ingrediente.findOne({
              where: {
                id: idi
              }
            });

          case 11:
            ingrediente = _context8.sent;

            if (!(ingrediente === null)) {
              _context8.next = 14;
              break;
            }

            return _context8.abrupt("return", res.status(404).send('Ingrediente inexistente'));

          case 14:
            _context8.next = 16;
            return hamburguesa.hasIngrediente(ingrediente);

          case 16:
            check = _context8.sent;

            if (!check) {
              _context8.next = 22;
              break;
            }

            hamburguesa.removeIngrediente(ingrediente);
            return _context8.abrupt("return", res.status(200).send('Ingrediente retirado'));

          case 22:
            return _context8.abrupt("return", res.status(404).send('Ingrediente inexistente en la hamburguesa'));

          case 23:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _delingrediente.apply(this, arguments);
}