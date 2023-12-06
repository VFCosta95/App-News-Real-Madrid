import { Component, OnInit } from '@angular/core';
import { NewService } from 'src/app/new.service'; 

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  data : any[] = []

  constructor(private service: NewService){
    
  }

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(){

    this.service.consumirDados().subscribe((dados) => {
        this.data = dados;
        console.log('Dados carregados:', this.data);
      },(erro) => {
        console.error('Erro ao carregar dados:', erro);
      }
    ); 

  }
}

  


