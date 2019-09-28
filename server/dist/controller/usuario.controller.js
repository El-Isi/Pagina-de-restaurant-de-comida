"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database/database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const file_system_1 = __importDefault(require("../classes/file-system"));
const fileSystem = new file_system_1.default();
class UserController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nave = yield database_1.default.query('SELECT * from usuarios');
            let pass;
            for (let passhash of nave) {
                if (bcrypt_1.default.compareSync(req.body.password, passhash.password) && req.body.username === passhash.username) {
                    pass = true;
                    break;
                }
                else {
                    pass = false;
                }
            }
            res.json(pass);
        });
    }
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nave = yield database_1.default.query('SELECT * from usuarios');
            let userregistrado = false;
            for (let users of nave) {
                if (req.body.username === users.username || req.body.email === users.email) {
                    userregistrado = false;
                    res.json({ mensaje: 'Este Nombre de Usuario ó email ya fue registrado, intente con otro', registro: 'Ups.. Ocurrio un error', operacion: false });
                    break;
                }
                else {
                    userregistrado = true;
                }
            }
            if (userregistrado) {
                let password = bcrypt_1.default.hashSync(req.body.password, 10);
                const regis = yield database_1.default.query("insert into usuarios values('" + req.body.username + "', '" + password + "', '" + req.body.email + "', '" + req.body.nombre + "', '" + req.body.Apellido + "', '" + req.body.domicilio + "', '" + req.body.pago + "')");
                res.json({ mensaje: 'El Usuario fue registrado con exito!. Ya puede Ingresar con tu Uusario y contraseña', registro: 'Usuario registrado correctamente', operacion: true });
            }
        });
    }
    comida(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nave = yield database_1.default.query("SELECT * from " + req.body.tipo);
            res.json(nave);
        });
    }
    carrito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nave = yield database_1.default.query("Insert into carrito values('" + req.body.username + "', '" + req.body.comidas + "', " + req.body.precio + ")");
            res.json(nave);
        });
    }
    verCarrito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nave = yield database_1.default.query("Select distinct username, comidas from carrito where username='" + req.body.username + "'");
            let nave2 = [];
            for (let i in nave) {
                nave2[i] = yield database_1.default.query("Select count(comidas) from carrito where username='" + req.body.username + "' and comidas='" + nave[i].comidas + "'");
            }
            res.json({ nave2, nave });
        });
    }
    pagar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nave = yield database_1.default.query("select * from carrito where username='" + req.body.username + "'");
            res.json(nave);
        });
    }
    borrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nave = yield database_1.default.query("delete from carrito where username='" + req.body.username + "'");
            res.json(nave);
        });
    }
}
const userController = new UserController;
exports.default = userController;
