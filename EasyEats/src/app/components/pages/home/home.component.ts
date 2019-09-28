import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../../services/posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private postService: PostsService, private router: Router) { }

  ngOnInit() {
  }

  buscarComida(){
    this.router.navigate(['burger']);
  }
}
