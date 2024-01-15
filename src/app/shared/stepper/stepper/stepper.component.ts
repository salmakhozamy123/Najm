import { Component, Input, OnInit, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
 
import { NgForm } from '@angular/forms';
import { ReportClassificationComponent } from 'src/app/pages/visitor/report-classification/report-classification.component';
import { ReportTypeComponent } from 'src/app/pages/visitor/report-type/report-type.component';
// import { IgxStepperComponent } from 'igniteui-angular';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  providers:[{provide:CdkStepper,useExisting:StepperComponent}]
})
export class StepperComponent extends CdkStepper implements OnInit{

  @Input() isCompleted:boolean = false;
  @Input() linearModeSelected = true;
  @Input() currentStepTitle:string = '';
  @Input() subTitle:string ='يمكنك تحديد أكثر من إختيار';

  @Input() selectedIndices: number[] = [];
  @Input() stepss: any[] = []; // Assuming you have an input property for the steps
  lastStepCompleted: number = -1;

  completed:[] = []

  ngOnInit(): void {
    this.linear = this.linearModeSelected;
    console.log(this.lastStepCompleted);
    
  }
  
  onClick(index: number) {
    this.selectedIndex = index;
    this.lastStepCompleted = this.selectedIndex -1
  }





  





}
