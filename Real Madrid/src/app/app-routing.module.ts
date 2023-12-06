import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/component/home/home.component'
import { PgJogadoresComponent } from 'src/app/component/pg-jogadores/pg-jogadores.component'
import { NoticiaDeteilComponent } from './component/noticia-deteil/noticia-deteil.component';
import { NoticiaComponent } from './component/noticia/noticia.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'elenco', component:PgJogadoresComponent},
  {path: 'noticias', component: NoticiaComponent},
  {path: 'noticias/:id', component: NoticiaDeteilComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
