import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { InputPopupComponent } from 'src/app/shared/popup/input-popup/input-popup.component';
import { RefusePopupComponent } from 'src/app/shared/popup/refuse-popup/refuse-popup.component';
import { SuccessPopupComponent } from 'src/app/shared/popup/success-popup/success-popup.component';

@Component({
  selector: 'app-reference-details',
  templateUrl: './reference-details.component.html',
  styleUrls: ['./reference-details.component.css']
})
export class ReferenceDetailsComponent implements OnInit {
 


  @ViewChild(SuccessPopupComponent) inputPopup!: SuccessPopupComponent;
  constructor(private route: ActivatedRoute, public dialog: MatDialog) {
    this.route.paramMap.subscribe(params => {
      const reportNo = params.get('reportNo');
      console.log(reportNo);
    });
  }
  ngOnInit(): void {
  
  }
  openDialog() {
    this.dialog.open(SuccessPopupComponent, {
      // data: {
      //   animal: 'panda',
      // },
    });
  }
  openRefuseDialog() {
    this.dialog.open(RefusePopupComponent, {
    });
  }
}
