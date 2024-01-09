import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  activeDiv: string | null = null;
  isButtonDisabled:boolean = true;

  constructor(private router: Router) {}

  toggleActive(divNumber: string) {
    if(this.activeDiv === divNumber)
    {
      this.activeDiv = null;
      this.isButtonDisabled = true;
    }
    else
    {
      this.activeDiv = divNumber;   
      this.isButtonDisabled = false;  
    }
    this.isButtonDisabled = this.activeDiv === null;
  } 
  navigateTo() {
    if(this.activeDiv === 'visitor') {
      this.router.navigate(['/visitor']);
    }
    if(this.activeDiv === 'reportRef') {
      this.router.navigate(['/account/signin']);
    }
    if(this.activeDiv === 'auditor') {
      this.router.navigate(['/account/signin']);
    }
    if(this.activeDiv === 'reportAuditor') {
      this.router.navigate(['/account/signin']);
    }
  }
}
