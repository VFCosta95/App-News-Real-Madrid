import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrosselComponent } from './component/home/carrossel/carrossel.component';
import { PhotoDepoimentoComponent } from './component/home/photo-depoimento/photo-depoimento.component';
import { ContOneComponent } from './component/home/cont-one/cont-one.component';
import { ContTwoComponent } from './component/home/cont-two/cont-two.component';
import { ThreeComponent } from './component/home/three/three.component';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PgJogadoresComponent } from './component/pg-jogadores/pg-jogadores.component';
import { ApiNewComponent } from './component/api-new/api-new.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContFourComponent } from './component/home/cont-four/cont-four.component';
import { NoticiaComponent } from './component/noticia/noticia.component';
import { NoticiaDeteilComponent } from './component/noticia-deteil/noticia-deteil.component';
import { MenuComponent } from './component/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CarrosselComponent,
    PhotoDepoimentoComponent,
    ContOneComponent,
    ContTwoComponent,
    ThreeComponent,
    HomeComponent,
    PgJogadoresComponent,
    ApiNewComponent,
    FooterComponent,
    ContFourComponent,
    NoticiaComponent,
    NoticiaDeteilComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
