import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../../services/posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  email: string;
  nombre: string;
  Apellido: string;
  domicilio: string;
  pago: string;
  posts = ['Porfavor Ingrese sus datos para poder registrarse', 'No hay datos', false];

  constructor( private postService: PostsService, private router: Router) { }

  ngOnInit() {
  }

  checar() {
    this.postService.resgisterUsers(this.username, this.password, this.email, this.nombre, this.Apellido, this.domicilio, this.pago)
      .subscribe(resp => {
        this.posts = Object.values(resp);
          if( (!this.username) || (!this.password) || (!this.email) || (!this.nombre) || (!this.Apellido) || (!this.domicilio) || (!this.pago)) {
            this.posts = ['Porfavor Ingrese sus datos para poder registrarse', 'No hay datos', false];
          }
      });
  }

  OK(registro: string) {
    if (registro) {
      this.router.navigate(['login']);
    }
  }
}
