import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab5PageRoutingModule } from './tab5-routing.module';

import { Tab5Page } from './tab5.page';
import { ProfilModule } from '../profil/profil.module';
import { CuisinkoalaModule } from '../cuisinkoala/cuisinkoala.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab5PageRoutingModule,
    ProfilModule,
    CuisinkoalaModule
  ],
  declarations: [Tab5Page]
})
export class Tab5PageModule {}
