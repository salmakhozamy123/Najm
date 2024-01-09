import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-white-card',
  templateUrl: './white-card.component.html',
  styleUrls: ['./white-card.component.css']
})
export class WhiteCardComponent {
  @Input() title:string = 'تصنيف البلاغ'
  @Input() divs:string[] = ['غسل اموال او تمويل إرهاب','مخالفة لمدونة قواعد السلوك'];
  @Input() cord:boolean = false;
  @Input() backgroundColor:string = '#FFF';

  @Output() accordionToggled = new EventEmitter<boolean>();
  isOpen:boolean = false;
  accordionId: string = `accordion-${Math.random().toString(36).substr(2, 9)}`;
  headerId: string = `header-${Math.random().toString(36).substr(2, 9)}`;
  collapseId: string = `collapse-${Math.random().toString(36).substr(2, 9)}`;

  toggleAccordion(): void {
    this.isOpen = !this.isOpen;
    this.accordionToggled.emit(this.isOpen);
  }
}
