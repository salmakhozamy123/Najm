import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { FullButtonComponent } from './full-button/full-button.component';
import { SemitransparentButtonComponent } from './semitransparent-button/semitransparent-button.component';
import { WhiteButtonComponent } from './white-button/white-button.component';

@NgModule({
  declarations: [
    FullButtonComponent,
    SemitransparentButtonComponent,
    WhiteButtonComponent
  ],
  imports: [
    CommonModule,
    ButtonsRoutingModule
  ],
  exports: [
    FullButtonComponent,
    SemitransparentButtonComponent,
    WhiteButtonComponent
  ]
})
export class ButtonsModule { }
