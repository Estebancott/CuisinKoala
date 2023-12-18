import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { ProfilModule } from '../profil/profil.module';
import { CuisinkoalaModule } from '../cuisinkoala/cuisinkoala.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    ProfilModule,
    CuisinkoalaModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
