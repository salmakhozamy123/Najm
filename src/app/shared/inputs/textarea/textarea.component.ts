import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent {
  @Input() name:string = 'textarea';
  @Input() label:string = 'يرجي كتابة نوع البلاغ'
  @Input() placeholder:string = 'اكتب نص البلاغ هنا ...'
  @Input() iconappear:boolean = false;
  @Input() isIconAppear = true;

  isCheckboxChecked = true;
}
