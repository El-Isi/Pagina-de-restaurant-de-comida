import { Router } from 'express';
import userController from '../controller/usuario.controller';

class postRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.post('/login', userController.login);
        this.router.post('/register', userController.register);
        this.router.post('/comida', userController.comida);
        this.router.post('/carrito', userController.carrito);
        this.router.post('/verCarrito', userController.verCarrito);
        this.router.post('/pagar', userController.pagar);
        this.router.post('/borrar', userController.borrar);
    }
}

export default new postRoutes().router;
