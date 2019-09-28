import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../../services/posts.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.scss']
})
export class BebidasComponent implements OnInit {

  bebidas: any[] = [];

  constructor(private postService: PostsService) { }

  ngOnInit() {
      this.postService.getComida('sodas').subscribe(resp => {
        for (let i in resp) {
          this.bebidas[i] = resp[i];
        }
        console.log(this.bebidas);
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
