import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './contactanos/contactanos.component';


const route: Routes = [
  { path:'home', component: HomeComponent },
  { path:'nosotros', component: NosotrosComponent },
  { path:'noticias', component: NoticiaComponent },
  { path:'contactanos', component: ContactanosComponent },
  { path:'**', redirectTo: 'home' }
] // ng g c contactanos

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(route),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
