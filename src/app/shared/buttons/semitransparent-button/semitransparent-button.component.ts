import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-semitransparent-button',
  templateUrl: './semitransparent-button.component.html',
  styleUrls: ['./semitransparent-button.component.css']
})
export class SemitransparentButtonComponent {
 @Input() name:string = 'عودة'
}
