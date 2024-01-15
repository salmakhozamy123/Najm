import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  date2: Date | undefined;
  // @Input() name:string = 'time';
  // label:string = '';
  svgContent: string = '<your SVG content here>';
  minDate = new Date('05/28/2022');
  // minDate = new Date('05/28/2022');
  updateSvgContent(newContent: string): void {
    this.svgContent = newContent;
  
}
}