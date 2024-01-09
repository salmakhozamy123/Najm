import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPopupComponent } from './input-popup/input-popup.component';
import { InputsModule } from '../inputs/inputs.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputPopupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputsModule,
  ],
  exports:[
    InputPopupComponent
  ]
})
export class PopupModule { }
