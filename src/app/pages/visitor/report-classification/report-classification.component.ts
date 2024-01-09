import { Component, Inject, ViewChild } from '@angular/core';
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

  activeDivs: number[] = [];


  toggleActive(divNumber: number) {
    const index = this.activeDivs?.indexOf(divNumber);
    if(index === -1) {
      this.activeDivs?.push(divNumber);
      
    } else {
      this.activeDivs?.splice(index, 1);
    }
    console.log(this.activeDivs);

    
  }

  openDialog() {
    this.dialog.open(InputPopupComponent, {
      data: {
        animal: 'panda',
      },
    });
    this.toggleActive(6);
  }
}



