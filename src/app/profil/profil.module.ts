import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilComponent } from './profil.component';

@NgModule({
  declarations: [ ProfilComponent ],
  exports: [ ProfilComponent ],
  imports: [ CommonModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ProfilModule {}