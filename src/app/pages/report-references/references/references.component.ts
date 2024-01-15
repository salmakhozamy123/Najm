import { NavbarServiceService } from 'src/app/shared/core/navbar-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent {
  constructor(public navservice:NavbarServiceService) {
    navservice.visible = true;
  }
 
}
