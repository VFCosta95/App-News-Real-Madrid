import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cont-four',
  templateUrl: './cont-four.component.html',
  styleUrls: ['./cont-four.component.css']
})
export class ContFourComponent {

  imageSrc: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const imagePath = 'assets/belligol.png';
    this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(imagePath);
  
  }

  title = 'Notícias'
  para = 'Encontra as últimas notícias, novidades, conferências de Imprensa, crónicas e atualidade do futebol do Real Madrid.'

  
}
