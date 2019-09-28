import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BurgerComponent } from './components/pages/burger/burger.component';
import { PizzaComponent } from './components/pages/pizza/pizza.component';
import { BebidasComponent } from './components/pages/bebidas/bebidas.component';
import { NavbarComponent } from './components/pages/navbar/navbar.component';
import { PagarComponent } from './components/pages/pagar/pagar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BurgerComponent,
    PizzaComponent,
    BebidasComponent,
    NavbarComponent,
    PagarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
