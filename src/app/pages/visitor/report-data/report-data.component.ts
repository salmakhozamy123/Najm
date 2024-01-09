import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { selectValidator } from 'src/app/shared/inputs/select/select.component';

@Component({
  selector: 'app-report-data',
  templateUrl: './report-data.component.html',
  styleUrls: ['./report-data.component.css']
})
export class ReportDataComponent {
  outputValue:string = ''
  username:string = ''
  usernames:string[] = []
  urls=[];
  
  reportdataForm = new FormGroup({
    country: new FormControl('',[Validators.required]),
    branch: new FormControl('',[Validators.required]),
    Administration: new FormControl('', [selectValidator()]),
    chanel: new FormControl('',[Validators.required]),
  })

formOperation(e: Event) {
  e.preventDefault();
  if(this.reportdataForm.valid) {
    console.log('Form Submitted', this.reportdataForm.value);
  }
  else {
    console.log('Form is not Valid');
    this.reportdataForm.markAllAsTouched(); 
  }
}
 get getcountry() {
  return this.reportdataForm.controls['country'];
 }
 get getbranch() {
  return this.reportdataForm.controls['branch'];
 }
 get getAdministration() {
  return this.reportdataForm.controls['Administration'];
 }
 get getchanel() {
  return this.reportdataForm.controls['chanel'];
 }

  onClick() {
    if (this.username.trim() !== '') {
      this.usernames.push(this.username);
      this.username = ''; // Clear the input after adding the username
    }
  }
  
  removeUsername(user: string) {
    this.usernames = this.usernames.filter(u => u !== user);
  }

  imageFiles: FilePreview[] = [];
  otherFiles: FilePreview[] = [];

  onFileSelected(event: any): void {
    const files = event.target.files;

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = (e: any) => {
          const url = e.target.result;
          const fileExtension = this.getFileExtension(file.name);

          if (['jpg', 'png', 'svg', 'jpeg'].includes(fileExtension)) {
            this.imageFiles.push({ name: file.name, url });
          } else {
            this.otherFiles.push({ name: file.name, url });
          }
        };

        reader.readAsDataURL(file);
      }
    }
  }

  private getFileExtension(filename: string): string {
    return filename.split('.').pop() || '';
  }
}


interface FilePreview {
  name: string;
  url: string;
}
