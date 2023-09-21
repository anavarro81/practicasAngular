import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuloModule } from './shared/modulo/modulo.module';
import { HomeComponent } from './pages/home/home.component';


import { VideoclubComponent } from './shared/videoclub/videoclub.component'
import { PeliculasComponent } from './shared/peliculas/peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoclubComponent,
    PeliculasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
