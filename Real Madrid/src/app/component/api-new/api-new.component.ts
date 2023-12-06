import { Component } from '@angular/core';
import { NewService } from 'src/app/new.service'; 

@Component({
  selector: 'app-api-new',
  templateUrl: './api-new.component.html',
  styleUrls: ['./api-new.component.css']
})
export class ApiNewComponent {


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
