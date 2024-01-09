import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InputPopupComponent } from 'src/app/shared/popup/input-popup/input-popup.component';

@Component({
  selector: 'app-report-type',
  templateUrl: './report-type.component.html',
  styleUrls: ['./report-type.component.css']
})
export class ReportTypeComponent {
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
