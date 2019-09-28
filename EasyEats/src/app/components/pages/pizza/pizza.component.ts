import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../../services/posts.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  pizzas: any[] = [];

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.getComida('pizza').subscribe(resp => {
      for (let i in resp) {
        this.pizzas[i] = resp[i];
      }
      console.log(this.pizzas);
    });
  }

  AddCarrito(comida: string, price: number){
    console.log(comida);
    console.log(price);
    this.postService.insertCarrito(comida, price).subscribe(resp => {
      console.log(resp);
    });
  }

}
