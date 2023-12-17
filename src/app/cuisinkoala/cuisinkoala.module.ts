import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuisinkoalaComponent } from './cuisinkoala.component';

@NgModule({
  declarations: [ CuisinkoalaComponent ],
  exports: [ CuisinkoalaComponent ],
  imports: [ CommonModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CuisinkoalaModule {}