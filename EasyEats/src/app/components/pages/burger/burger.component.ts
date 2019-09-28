import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../../services/posts.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent implements OnInit {

  burgers: any[] = [];

  constructor( private postService: PostsService) { }

  ngOnInit() {
    this.postService.getComida('burger').subscribe(resp => {
      for (let i in resp) {
        this.burgers[i] = resp[i];
      }
      console.log(this.burgers);
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
