"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = __importDefault(require("../controller/usuario.controller"));
class postRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/login', usuario_controller_1.default.login);
        this.router.post('/register', usuario_controller_1.default.register);
        this.router.post('/comida', usuario_controller_1.default.comida);
        this.router.post('/carrito', usuario_controller_1.default.carrito);
        this.router.post('/verCarrito', usuario_controller_1.default.verCarrito);
        this.router.post('/pagar', usuario_controller_1.default.pagar);
        this.router.post('/borrar', usuario_controller_1.default.borrar);
    }
}
exports.default = new postRoutes().router;
