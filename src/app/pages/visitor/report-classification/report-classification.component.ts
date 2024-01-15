import { Component, EventEmitter, Inject, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import {MatDialog} from '@angular/material/dialog';

import { InputPopupComponent } from 'src/app/shared/popup/input-popup/input-popup.component';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-report-classification',
  templateUrl: './report-classification.component.html',
  styleUrls: ['./report-classification.component.css'],
})
export class ReportClassificationComponent {

  constructor(public dialog: MatDialog) {}
  @ViewChild('classificationForm', { static: true }) form?: NgForm;
  @Output() activeDivsChange: EventEmitter<number[]> = new EventEmitter<number[]>();

  activeDivs: number[] = [];
  @ViewChild(InputPopupComponent) inputPopup!: InputPopupComponent;

  toggleActive(divNumber: number) {
    const index = this.activeDivs?.indexOf(divNumber);
    if(index === -1) {
      this.activeDivs?.push(divNumber);
      
    } else {
      this.activeDivs?.splice(index, 1);
    }
    console.log(this.activeDivs);
    this.activeDivsChange.emit(this.activeDivs);
    
  }

  openDialog() {
    this.dialog.open(InputPopupComponent, {
    });
    this.toggleActive(6);
  } 
test(){
  const title=document.querySelectorAll('.stepword'); 
(  title[0] as HTMLElement).style.color='red'
  console.log(title);
  
}
}



