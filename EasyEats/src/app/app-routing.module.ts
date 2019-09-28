import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BurgerComponent } from './components/pages/burger/burger.component';
import { PizzaComponent } from './components/pages/pizza/pizza.component';
import { BebidasComponent } from './components/pages/bebidas/bebidas.component';
import {PagarComponent} from './components/pages/pagar/pagar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'burger', component: BurgerComponent },
  { path: 'pizza', component: PizzaComponent },
  { path: 'drinks', component: BebidasComponent },
  { path: 'pagar', component: PagarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

export const APP_ROUTING = RouterModule.forRoot(routes, {useHash: true});


