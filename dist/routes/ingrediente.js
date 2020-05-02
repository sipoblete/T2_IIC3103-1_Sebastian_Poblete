"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _ingrediente = require("../controllers/ingrediente.controller");

var router = (0, _express.Router)();
router.get('/', _ingrediente.getingrediente);
router.get('/:id', _ingrediente.getOneingrediente);
router.post('/', _ingrediente.createingrediente);
router["delete"]('/:id', _ingrediente.deleteingrediente);
var _default = router;
exports["default"] = _default;