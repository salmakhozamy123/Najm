import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {

  imageFiles: FilePreview[] = [];
  otherFiles: FilePreview[] = [];

  get imageNo(): number {
    return this.imageFiles.length;
  }

  get fileNo(): number {
    return this.otherFiles.length;
  }

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
