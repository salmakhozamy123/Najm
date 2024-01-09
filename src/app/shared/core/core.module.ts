import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ImgNavComponent } from './img-nav/img-nav.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    ImgNavComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports:[
    NavComponent,
    ImgNavComponent
  ]
})
export class CoreModule { }
