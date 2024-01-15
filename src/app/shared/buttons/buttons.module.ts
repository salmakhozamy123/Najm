import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { FullButtonComponent } from './full-button/full-button.component';
import { SemitransparentButtonComponent } from './semitransparent-button/semitransparent-button.component';
import { WhiteButtonComponent } from './white-button/white-button.component';
import { BlueButtonComponent } from './blue-button/blue-button.component';
import { GreenButtonComponent } from './green-button/green-button.component';
import { FrontButtonComponent } from './front-button/front-button.component';
import { BackbuttonComponent } from './backbutton/backbutton.component';

@NgModule({
  declarations: [
    FullButtonComponent,
    SemitransparentButtonComponent,
    WhiteButtonComponent,
    BlueButtonComponent,
    GreenButtonComponent,
    FrontButtonComponent,
    BackbuttonComponent
  ],
  imports: [
    CommonModule,
    ButtonsRoutingModule
  ],
  exports: [
    FullButtonComponent,
    SemitransparentButtonComponent,
    WhiteButtonComponent,
    GreenButtonComponent,
    BlueButtonComponent,
    FrontButtonComponent,
    BackbuttonComponent
  ]
})
export class ButtonsModule { }
