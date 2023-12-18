import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.page.html',
  styleUrls: ['./modification.page.scss'],
})
export class ModificationPage implements OnInit {
  Lait: number = 1; 

  constructor() { }

  ngOnInit() {
  }

  incrementer() {
    this.Lait++; // Incrémente la valeur
    console.log(this.Lait); 
  }

  decrementer() {
    if (this.Lait > 0){
      this.Lait--; // Décrémente la valeur
      console.log(this.Lait); 
  }
}
}
