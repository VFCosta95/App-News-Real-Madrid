import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  imageSrc: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const imagePath = 'assets/kroos.png';
    this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(imagePath);
  
  }

  title = 'A Paixão da torcida'
  para = 'A paixão ardente da torcida do Real Madrid transcende as fronteiras do futebol, unindo milhões de pessoas em todo o mundo através de um amor inabalável pelo clube. Suas vozes ecoam nos estádios, seus corações pulsam em cada vitória e derrota, e seu apoio incansável alimenta a chama que faz do Real Madrid não apenas uma equipe, mas uma verdadeira instituição de fervor e devoção.'
}
