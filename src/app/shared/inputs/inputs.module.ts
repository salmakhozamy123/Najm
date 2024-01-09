import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputsRoutingModule } from './inputs-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { SelectComponent } from './select/select.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { TextareaComponent } from './textarea/textarea.component';
import { InputGroupComponent } from './input-group/input-group.component';


@NgModule({
  declarations: [
    CalendarComponent,
    SelectComponent,
    UploadFileComponent,
    TextareaComponent,
    InputGroupComponent
  ],
  imports: [
    CommonModule,
    InputsRoutingModule,
    CalendarModule,
    FormsModule,
  ],
  exports:[
    SelectComponent,
    CalendarComponent,
    TextareaComponent,
    InputGroupComponent,
    UploadFileComponent
  ]
})
export class InputsModule { }
