"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _hamburguesa = require("../controllers/hamburguesa.controller");

var router = (0, _express.Router)();
// Crear hamburguesa
router.post('/', _hamburguesa.createHamburguesa); // Mostrar todas las hamburguesas

router.get('/', _hamburguesa.getHamburguesa); // Mostrar solo una hamburguesa

router.get('/:id', _hamburguesa.getOnehamburguesa); // Rliminar una hamburguesa con su id

router["delete"]('/:id', _hamburguesa.deleteHamburguesa); // Actualizar datos hamburguesa

router.patch('/:id', _hamburguesa.updatehamburguesa); // Agregar ingrediente a hamburguesa

router.put('/:idh/ingrediente/:idi', _hamburguesa.addingrediente); // Eliminar ingrediente de hamburgueda

router["delete"]('/:idh/ingrediente/:idi', _hamburguesa.delingrediente);
var _default = router;
exports["default"] = _default;