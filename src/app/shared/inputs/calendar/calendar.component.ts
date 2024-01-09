import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  date2: Date | undefined;
  @Input() name:string = 'time';
  // label:string = '';
}
