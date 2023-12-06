import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cont-two',
  templateUrl: './cont-two.component.html',
  styleUrls: ['./cont-two.component.css']
})
export class ContTwoComponent implements OnInit{

  imageSrc: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const imagePath = 'assets/rodry.png';
    this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(imagePath);
  
  }

  title = 'O Maior do Mundo'
  para = 'O Real Madrid é reconhecido como o maior clube de futebol do mundo, graças à sua rica história, conquistas notáveis e legião de fãs apaixonados.'
}
