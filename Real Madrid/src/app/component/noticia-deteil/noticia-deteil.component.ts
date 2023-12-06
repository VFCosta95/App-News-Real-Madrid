import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { NewService } from 'src/app/new.service'; 
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-noticia-deteil',
  templateUrl: './noticia-deteil.component.html',
  styleUrls: ['./noticia-deteil.component.css']
})
export class NoticiaDeteilComponent {

  dados: any = {};

  constructor(private route: ActivatedRoute, private service: NewService)
  { 
    this.route.params.subscribe(params => {
    const id = +params['id']; // Capturou o ID da rota
    this.buscarDados(id);
    })
  }

  buscarDados(id: number) {
    this.service.buscarDados(id).subscribe(dados => {
      // Verificando se há dados retornados
      if (dados && dados.length > 0) {
        // Encontrando o objeto com base no ID usando o metodo find()
        const dadoDoId = dados.find(dado => dado.id === id);
        if (dadoDoId) {
          console.log(dadoDoId);
          this.dados = dadoDoId; // Atribuindo a minha variavel dados 
        } else {
          console.log('Nenhum dado encontrado com o ID especificado.');
        }
      } else {
        console.log('Nenhum dado retornado pela busca.');
      }
    });
  }

}
