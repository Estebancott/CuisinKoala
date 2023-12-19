import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Card2Component } from './card2.component';

@NgModule({
  declarations: [ Card2Component ],
  exports: [ Card2Component ],
  imports: [ CommonModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class Card2Module {}