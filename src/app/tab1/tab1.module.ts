import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { CardModule } from '../card/card.module';
import { ProfilModule} from '../profil/profil.module';
import { CuisinkoalaModule} from '../cuisinkoala/cuisinkoala.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    CardModule,
    ProfilModule,
    CuisinkoalaModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
