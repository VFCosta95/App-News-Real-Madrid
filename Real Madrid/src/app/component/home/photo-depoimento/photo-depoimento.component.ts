import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-depoimento',
  templateUrl: './photo-depoimento.component.html',
  styleUrls: ['./photo-depoimento.component.css']
})
export class PhotoDepoimentoComponent {

  theBest = [
    {
      photo: 'https://www.pngall.com/wp-content/uploads/4/Ronaldo-FIFA-PNG.png',
      nome: 'Cristiano Ronaldo',
      desc: ' Ronaldo deixou uma marca indelével na história do Real Madrid e é lembrado como o maior ídolo do clube.',
      titulos: '16 Titulos'
    },
    {
      photo: 'https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fjpeg&blobkey=id&blobtable=MungoBlobs&blobwhere=1203339998345&ssbinary=true',
      nome: 'Di Stefano',
      desc: 'Di Stefano é lembrado como um jogador icônico do Real Madrid e sua influência no clube vai além de suas estatísticas impressionantes.',
      titulos: '05 Titulos'
    },
    {
      photo: 'https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fjpeg&blobkey=id&blobtable=MungoBlobs&blobwhere=1203339998415&ssbinary=true',
      nome: 'Puskas',
      desc: 'Puskas marcou mais de 240 gols em cerca de 260 jogos pelo clube, estabelecendo um legado duradouro como um dos maiores jogadores a vestir a camisa do Real Madrid.',
      titulos: '05 Titulos'
    },
    /*{
      photo: 'https://www.realmadrid.com/img/vertical_380px/zidane_20220712070022.jpg',
      nome: 'Zidane',
      desc: 'Após se aposentar como jogador, Zidane voltou ao Real Madrid como treinador e guiou o clube a três títulos consecutivos da Liga dos Campeões da UEFA, consolidando seu legado como um dos maiores nomes da história do clube.',
      titulos: '06 Titulos'
    }*/
  ]
}
