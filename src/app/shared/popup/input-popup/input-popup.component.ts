import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-input-popup',
  templateUrl: './input-popup.component.html',
  styleUrls: ['./input-popup.component.css'],
})
export class InputPopupComponent implements OnInit{
  @Input() title:string ="يرجي كتابة نوع البلاغ"
  @Output() close = new EventEmitter<void>();
  // textareaValue: string = '';
  // salma:boolean = true;
  // @Output() textareaValueChange = new EventEmitter<string>();


  inputForm :any;
  
  
  constructor(public fb:FormBuilder,
    public dialogRef: MatDialogRef<InputPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void { 
   this.inputForm=new FormGroup({
    textarea:new FormControl('')
   }) 
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  saveData(e:Event) {console.log('test');
  
    // e.preventDefault();
    if(this.inputForm.valid){
      console.log('data saved');
      // this.textareaValueChange.emit(this.textareaValue);
        console.log(this.inputForm.value);
        alert("تم اضافة البلاغ بنجاح");
        this.closeDialog(); 
      
    }
    else {
      console.log('invalid')
      this.inputForm.markAllAsTouched();
    }

  }


  get gettextarea() {
    return this.inputForm.controls['textarea'];
  }
}
