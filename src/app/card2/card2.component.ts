import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss'],
})
export class Card2Component  implements OnInit {
  cards2 = [
    {
      title: 'Pate à la carbonara',
      subtitle: '#Ingrédients dans votre frigo',
      description: 'Découvrez la recette des pâtes à la carbonara',
      image: '../assets/plat/carbonara.jpg',
      serves: 4,
      ingredients: [
        { name: 'Spaghetti', quantity: '500g' },
        { name: 'Pancetta', quantity: '200g' },
        { name: 'Parmesan râpé', quantity: '100g' },
        { name: 'Jaunes d’œufs', quantity: '4' },
        { name: 'Crème fraîche', quantity: '2 cuillères à soupe' },
        { name: 'Poivre', quantity: '1 pincée' },
      ],
    },
    {
      title: 'Ratatouille',
      subtitle: '#Ingrédients dans votre frigo',
      description: 'Découvrez la recette de notre délicieuse ratatouille',
      image: '../assets/plat/ratatouille.jpg',
      serves: 6,
      ingredients: [
        { name: 'Aubergines', quantity: '2' },
        { name: 'Courgettes', quantity: '2' },
        { name: 'Poivrons', quantity: '2' },
        { name: 'Tomates', quantity: '4' },
        { name: 'Oignon', quantity: '1' },
        { name: 'Ail', quantity: '2 gousses' },
        { name: 'Huile d’olive', quantity: '3 cuillères à soupe' },
        { name: 'Herbes de Provence', quantity: '1 cuillère à café' },
        { name: 'Sel', quantity: '1 pincée' },
        { name: 'Poivre', quantity: '1 pincée' },
      ],
    },
    {
      title: 'Couscous',
      subtitle: '#Ingrédients dans votre frigo',
      description: 'Découvrez la recette de notre magnifique couscous',
      image: '../assets/plat/couscous.jpg',
      serves: 5,
      ingredients: [
        { name: 'Semoule de couscous', quantity: '500g' },
        { name: 'Légumes pour couscous', quantity: '1kg' },
        { name: 'Viande d’agneau', quantity: '800g' },
        { name: 'Huile d’olive', quantity: '3 cuillères à soupe' },
        { name: 'Sel', quantity: '1 cuillère à café' },
        { name: 'Poivre', quantity: '1/2 cuillère à café' },
        { name: 'Ras el hanout', quantity: '2 cuillères à café' },
        { name: 'Bouillon de légumes', quantity: '1 litre' },
        { name: 'Pois chiches', quantity: '400g' },
      ],
    }
    

  ];

  ngOnInit() {}

  onIonInfinite(event: any) {
  
  }

}
