import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { InputPopupComponent } from './input-popup/input-popup.component';
import { InputsModule } from '../inputs/inputs.module';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { PopupCardComponent } from './popup-card/popup-card.component';
import { RefusePopupComponent } from './refuse-popup/refuse-popup.component';
import { SuccessPopupComponent } from './success-popup/success-popup.component';
import { ConfirmrefuseComponent } from './confirmrefuse/confirmrefuse.component';
import { ReactiveFormsModule }  from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { AppModule } from 'src/app/app.module';



@NgModule({
  declarations: [
    InputPopupComponent,
    TestComponent,
    PopupCardComponent,
    RefusePopupComponent,
    SuccessPopupComponent,
    ConfirmrefuseComponent
  ],
  imports: [
    AppModule,
    CommonModule,
    // FormsModule,
    // InputsModule,
    ReactiveFormsModule,
    // BrowserModule
  ],
  exports:[
    InputPopupComponent,
    PopupCardComponent,
    RefusePopupComponent,
    SuccessPopupComponent
  ]
})
export class PopupModule { }
