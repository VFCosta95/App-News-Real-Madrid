import { Component } from '@angular/core';

@Component({
  selector: 'app-pg-jogadores',
  templateUrl: './pg-jogadores.component.html',
  styleUrls: ['./pg-jogadores.component.css']
})
export class PgJogadoresComponent {

  Players = [
    {
        "Nome":"Courtois",
        "Posição":"Goleiro", 
        "Idade": 31, 
        "Numero": 1,
        "Image": "https://api.sofascore.app/api/v1/player/70988/image"
    },
    {
        "Nome":"Alaba",
        "Posição":"Zagueiro", 
        "Idade": 30, 
        "Numero": 4,
        "Image": "https://api.sofascore.app/api/v1/player/66492/image"
    },
    {
        "Nome":"Militão",
        "Posição":"Zagueiro", 
        "Idade": 25, 
        "Numero": 3,
        "Image": "https://api.sofascore.app/api/v1/player/822519/image"
    },
    {
        "Nome":"Carvajal",
        "Posição":"Lateral", 
        "Idade": 31, 
        "Numero": 2,
        "Image": "https://api.sofascore.app/api/v1/player/138572/image"
    },
    {
        "Nome":"Mendy",
        "Posição":"Lateral", 
        "Idade": 28, 
        "Numero": 23,
        "Image": "https://api.sofascore.app/api/v1/player/792073/image"
    },
    {
        "Nome":"Camavinga",
        "Posição":"Volante", 
        "Idade": 20, 
        "Numero": 12,
        "Image": "https://api.sofascore.app/api/v1/player/973887/image"
    },
    {
        "Nome":"Valverde",
        "Posição":"Meio-Campo", 
        "Idade": 24, 
        "Numero": 15,
        "Image": "https://api.sofascore.app/api/v1/player/831808/image"
    },
    {
        "Nome":"Bellingham",
        "Posição":"Meio-Campo", 
        "Idade": 19, 
        "Numero": 5,
        "Image": "https://api.sofascore.app/api/v1/player/991011/image"
    },
    {
        "Nome":"Modric",
        "Posição":"Meio-Campo", 
        "Idade": 37, 
        "Numero": 10,
        "Image": "https://api.sofascore.app/api/v1/player/15466/image"
    },
    {
        "Nome":"Vini Jr",
        "Posição":"Atcante", 
        "Idade": 22, 
        "Numero": 7,
        "Image": "https://api.sofascore.app/api/v1/player/868812/image"
    },
    {
        "Nome":"Rodrygo",
        "Posição":"Atacante", 
        "Idade": 21, 
        "Numero": 11,
        "Image": "https://api.sofascore.app/api/v1/player/910536/image"
    },
    {
        "Nome":"Lunin",
        "Posição":"Goleiro", 
        "Idade": 24, 
        "Numero": 13,
        "Image": "https://api.sofascore.app/api/v1/player/857574/image"
    },
    {
        "Nome":"Rudiger",
        "Posição":"Zagueiro", 
        "Idade": 30, 
        "Numero": 22,
        "Image": "https://api.sofascore.app/api/v1/player/142622/image"
    },
    {
        "Nome":"Vázquez",
        "Posição":"Lateral", 
        "Idade": 31, 
        "Numero": 17,
        "Image": "https://api.sofascore.app/api/v1/player/255239/image"
    },
    {
        "Nome":"Nacho",
        "Posição":"Zagueiro", 
        "Idade": 33, 
        "Numero": 6,
        "Image": "https://api.sofascore.app/api/v1/player/69404/image"
    },
    {
        "Nome":"Kross",
        "Posição":"Meio-Campo", 
        "Idade": 33, 
        "Numero": 8,
        "Image": "https://api.sofascore.app/api/v1/player/26502/image"
    },
    {
        "Nome":"Rodriguez",
        "Posição":"Atacante", 
        "Idade": 18, 
        "Numero": 39,
        "Image": "https://api.sofascore.app/api/v1/player/1154587/image"
    },
    {
        "Nome":"Joselu",
        "Posição":"Atacante",
        "Idade": 33,
        "Numero": 9,
        "Image":"https://api.sofascore.app/api/v1/player/69418/image"
    }
    
]

photo = 'https://api.sofascore.app/api/v1/team/2829/image'

  
}
