import { Router, Request, Response } from 'express';
import pool from '../database/database';
import bcrypt from 'bcrypt';
import { FileUpload } from '../interfaces/file-upload';
import FileSystem from '../classes/file-system';

const fileSystem = new FileSystem();

class UserController {

    public async login(req: Request, res: Response): Promise<void> {
        const nave = await pool.query('SELECT * from usuarios');
        let pass;
        for(let passhash of nave){
            if(bcrypt.compareSync(req.body.password, passhash.password) && req.body.username === passhash.username){
                pass = true;
                break;
            }else {
                pass = false;
            }
        }
        res.json(pass);
    }
    public async register(req: Request, res: Response): Promise<void> {
        const nave = await pool.query('SELECT * from usuarios');
        let userregistrado = false;
        for(let users of nave){
            if(req.body.username === users.username || req.body.email === users.email){
                userregistrado = false;
                res.json({mensaje: 'Este Nombre de Usuario ó email ya fue registrado, intente con otro', registro: 'Ups.. Ocurrio un error', operacion: false});
                break;
            } else {
                userregistrado = true;
            }
        }
        if(userregistrado){
            let password = bcrypt.hashSync(req.body.password, 10);
            const regis = await pool.query("insert into usuarios values('" + req.body.username + "', '" + password + "', '" + req.body.email + "', '" + req.body.nombre + "', '" + req.body.Apellido + "', '" + req.body.domicilio +"', '" + req.body.pago + "')");
            res.json({mensaje: 'El Usuario fue registrado con exito!. Ya puede Ingresar con tu Uusario y contraseña', registro: 'Usuario registrado correctamente', operacion: true});
        }
    }
    public async comida(req: Request, res: Response): Promise<void> {
        const nave = await pool.query("SELECT * from " + req.body.tipo);
        res.json(nave);
    }
    public async carrito(req: Request, res: Response): Promise<void> {
        const nave = await pool.query("Insert into carrito values('" + req.body.username + "', '" + req.body.comidas + "', " + req.body.precio + ")");
        res.json(nave);
    }
    public async verCarrito(req: Request, res: Response): Promise<void> {
        const nave = await pool.query("Select distinct username, comidas from carrito where username='" + req.body.username+ "'");
        let nave2: any[] = [];
        for(let i in nave){
            nave2[i] = await pool.query("Select count(comidas) from carrito where username='" + req.body.username+ "' and comidas='" + nave[i].comidas + "'");
        }
        res.json({ nave2, nave});
    }
    public async pagar(req: Request, res: Response): Promise<void> {
        const nave = await pool.query("select * from carrito where username='" + req.body.username + "'");
        res.json(nave);
    }
    public async borrar(req: Request, res: Response): Promise<void> {
        const nave = await pool.query("delete from carrito where username='" + req.body.username + "'");
        res.json(nave);
    }
}

const userController = new UserController;

export default userController;