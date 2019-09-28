import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Usuario} from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  usuario: string;

  constructor( private http: HttpClient ) { }

  getUsuarios( pass: string, user: string) {
    let usuario = {
      username: user,
      password: pass
    };
    return this.http.post(`${ URL }/post/login`, usuario);
  }

  resgisterUsers( username: string, password: string, email: string, nombre: string, Apellido: string, domicilio: string, pago: string) {
    let usuario = {
      username: username,
      password: password,
      email: email,
      nombre: nombre,
      Apellido: Apellido,
      domicilio: domicilio,
      pago: pago
    };
    return this.http.post(`${ URL }/post/register`, usuario);
  }

  getComida(tipoC: string) {
    let body = {
      tipo: tipoC,
    };
    return this.http.post(`${ URL }/post/comida`, body);
  }

  insertCarrito(comida: string, price: number) {
    let body = {
      username: this.usuario,
      comidas: comida,
      precio: price
    };
    console.log(body);
    return this.http.post(`${ URL }/post/carrito`, body);
  }
  getCarrito() {
    let body = {
      username: this.usuario,
    };
    return this.http.post(`${ URL }/post/verCarrito`, body);
  }

  Pagar() {
    let body = {
      username: this.usuario,
    };
    return this.http.post(`${ URL }/post/pagar`, body);
  }
  borrar() {
    let body = {
      username: this.usuario,
    };
    return this.http.post(`${ URL }/post/borrar`, body);
  }

}
