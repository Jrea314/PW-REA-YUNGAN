"use strict";
var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj._esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.listen(4000);
console.log('El servidor se escucha por el puerto ', 4000)