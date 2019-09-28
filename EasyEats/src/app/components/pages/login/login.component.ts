import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import {Usuario} from '../../../interfaces/interfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: string;
  password: string;
  entrar: any = false;
  constructor( private postService: PostsService, private router: Router) { }

  ngOnInit() {
  }

  autenticacion() {
    this.postService.getUsuarios(this.password, this.user).subscribe(resp => {
      console.log(resp);
      this.entrar = resp;
      if (this.entrar) {
        this.postService.usuario = this.user;
        this.router.navigate(['home']);
      }
    });
  }

}
