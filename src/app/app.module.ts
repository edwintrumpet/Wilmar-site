import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { NavbarComponent } from './components/sections/navbar/navbar.component';
import { VideosComponent } from './components/videos/videos.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ObsequiosCarrouselComponent } from './components/sections/obsequios-carrousel/obsequios-carrousel.component';
import { WhatsappComponent } from './components/sections/whatsapp/whatsapp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
    NavbarComponent,
    VideosComponent,
    FotosComponent,
    ServiciosComponent,
    ContactoComponent,
    ObsequiosCarrouselComponent,
    WhatsappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
