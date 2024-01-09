import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-input-popup',
  templateUrl: './input-popup.component.html',
  styleUrls: ['./input-popup.component.css']
})
export class InputPopupComponent {
  @Output() close = new EventEmitter<void>();
  textareaValue: string = '';

  constructor(
    public dialogRef: MatDialogRef<InputPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  saveData() {
    console.log('data saved', this.textareaValue);
    this.textareaValue='';
    
  }
}
