import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})

export class SelectComponent {
 @Input() title:string = '';
 @Input() name:string = '';

}

export function selectValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const selectedValue = control.value;

    // Customize this condition based on your validation logic
    if (selectedValue === null || selectedValue === undefined || selectedValue === '') {
      return { 'selectInvalid': true };
    }

    return null;
  };
}