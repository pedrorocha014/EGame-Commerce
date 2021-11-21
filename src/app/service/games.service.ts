import { Injectable } from '@angular/core';
import { Games } from '../model/games.model'

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  gamesArray: Array<Games> = [
    new Games({id: 0, title: "Tom Clancy's Rainbow Six® Siege", description: "O Tom Clancy's Rainbow Six Siege é o próximo lançamento da aclamada franquia de FPS desenvolvida pelo renomado estúdio Ubisoft Montreal.", image: "./../assets/img/rainbowSix.jpg", price: 60.00}),
    new Games({id: 1, title: "Apex Legends™", description: "Apex Legends é o premiado jogo de tiro em primeira pessoa de heróis e heroínas da Respawn Entertainment. ", image: "./../assets/img/apex.jpg", price: 0.00}),
    new Games({id: 2, title: "Hollow Knight", description: "Forje seu caminho em Hollow Knight! Uma aventura de ação épica em um vasto reino arruinado de insetos e heróis.", image: "./../assets/img/hollowknight.jpg", price: 27.99}),
    new Games({id: 3, title: "Dead Cells", description: "Dead Cells é um rogue-lite de ação em plataforma estilo Metroidvania.", image: "./../assets/img/dadcells.jpg", price: 47.90}),
    new Games({id: 4, title: "Hades", description: "Desafie o deus dos mortos enquanto você batalha para sair do Submundo neste jogo roguelike dos mesmos criadores de Bastion, Transistor e Pyre.", image: "./../assets/img/hades.jpg", price: 47.49})
  ]
}
