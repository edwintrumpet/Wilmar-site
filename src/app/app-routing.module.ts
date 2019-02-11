import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { VideosComponent } from './components/videos/videos.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'fotos', component: FotosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'repertorio', component: ContactoComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
