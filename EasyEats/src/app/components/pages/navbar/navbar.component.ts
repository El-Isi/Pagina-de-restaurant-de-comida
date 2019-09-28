import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../../services/posts.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  nombre: string = this.postService.usuario;
  carrito: any;
  comidas: any[];
  cantidades: any[];

  constructor( private postService: PostsService) { }

  ngOnInit() {
    setInterval(() => {
      this.postService.getCarrito().subscribe(resp => {
        this.carrito = resp;
        this.comidas = this.carrito.nave;
        this.cantidades = this.carrito.nave2;
      });
    }, 500);
  }

}
