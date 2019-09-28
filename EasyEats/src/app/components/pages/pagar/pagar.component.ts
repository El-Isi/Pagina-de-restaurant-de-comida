import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../../services/posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.scss']
})
export class PagarComponent implements OnInit {

  carrito: any[] = [];
  total = 0;

  constructor( private postServide: PostsService, private router: Router) { }

  ngOnInit() {
    this.postServide.Pagar().subscribe(resp => {
      for(let i in resp) {
        this.carrito[i] = resp[i];
        this.total += this.carrito[i].precio;
      }
    });
  }

  pagando() {
    this.postServide.borrar().subscribe(resp => {
      console.log(resp);
    });
    this.router.navigate(['home']);
  }

}
