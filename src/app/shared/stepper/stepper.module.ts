import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperRoutingModule } from './stepper-routing.module';
import { StepperComponent } from './stepper/stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    StepperComponent
  ],
  imports: [
    CommonModule,
    StepperRoutingModule,
    CdkStepperModule,
    MatStepperModule,
    MatIconModule
  ],
  exports:[
    StepperComponent,
    CdkStepperModule,
    MatStepperModule,
    MatIconModule
  ]
})
export class StepperModule { }
