import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {
  cards = [
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      imageURL: 'https://via.placeholder.com/300',
    },
    {
      title: 'Card 2',
      description: 'Description for Card 2',
      imageURL: 'https://via.placeholder.com/300',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3',
      imageURL: 'https://via.placeholder.com/300',
    },

  ];

  slideOptions = {
    direction: 'horizontal', // Défilement horizontal (la valeur par défaut est 'horizontal')
    slidesPerView: 1, // Nombre de slides à afficher à la fois
    spaceBetween: 10, // Marge entre les slides (ajustez selon vos besoins)
  };

  constructor() { }

  ngOnInit() {}

}
