import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS} from '@angular/forms';
/*
@Directive({
  selector: '[appAppValidators]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisiting: EmailValidatorDirective,
    multi: true
  }]
})
export class AppValidatorsDirective {
  validate(control: AbstractControl): {[key: string]: any} {
    const re = /^([\w+]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w]{0.66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!control.value || control.value === '' || re.test(control.value)) {
      return null;
    } else {
      return {'invalidEMail' : true};
    }
  }
}

export const APPLICATION_VALIDATORS = [EmailValidatorDirective];
*/
