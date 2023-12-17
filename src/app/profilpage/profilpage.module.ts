import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilpagePageRoutingModule } from './profilpage-routing.module';

import { ProfilpagePage } from './profilpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilpagePageRoutingModule
  ],
  declarations: [ProfilpagePage]
})
export class ProfilpagePageModule {}
