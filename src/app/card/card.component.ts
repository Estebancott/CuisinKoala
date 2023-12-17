import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  // Tableau d'objets représentant les cartes avec leurs propriétés
  cards = [
    {
      title: 'Poulet à la crème',
      subtitle: '#Tendance',
      description: 'Découvrez la recette de notre magnifique Poulet à la crème',
      image: '../assets/plat1.jpg',
    },
    {
      title: 'Chakchouka aux oeufs',
      subtitle: '#Tendance',
      description: 'Découvrez la recette de notre magnifique Chakchouka aux oeufs',
      image: '../assets/plat2.jpg',
    },
    {
      title: 'Colombo de veau',
      subtitle: '#Tendance',
      description: 'Découvrez la recette de notre magnifique Colombo de veau',
      image: '../assets/plat3.jpg',
    },

  ];
 
  
  ngOnInit() {}

  
  onIonInfinite(event: any) {
  
  }
}
