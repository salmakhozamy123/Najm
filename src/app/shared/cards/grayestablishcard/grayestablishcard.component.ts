import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grayestablishcard',
  templateUrl: './grayestablishcard.component.html',
  styleUrls: ['./grayestablishcard.component.css']
})
export class GrayestablishcardComponent {

  @Input() title:string = 'بلاغ رقم :'
  @Input() subTitle:string = 'تفاصيل البلاغ'
  @Input() reportNo:string = '#123'
  @Input() reportStatus:string = 'مقبول'

  handleAccordionToggle(isOpen: boolean): void {
    // Do something with the accordion state (e.g., update a property)
    console.log('Accordion is open:', isOpen);
  }


  @Input() primaryTitle:string = 'إجمالي الحوادث'
  @Input() secondaryTitle:string = ''
  @Input() appearTab:boolean = true
  @Input() Padding:string = '20px'
  @Input() backgroundColor:string = ''
  index: number = 0;

  changeTab(tabIndex: any) {
    this.index = tabIndex
   }
   
}
