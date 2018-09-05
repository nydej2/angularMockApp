import {Component, Input} from '@angular/core';
import {FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-show-error',
  templateUrl: './show-error.component.html',
  styleUrls: ['./show-error.component.css']
})
export class ShowErrorComponent {

  @Input('path') controlPath;
  @Input('text') controlText;
  constructor(private ngForm: NgForm) { }

  get errorMessages(): string[] {
    const messages = [];
    const form: FormGroup = this.ngForm.form;
    const control = form.get(this.controlPath);
    if (!control || !(control.touched) || !control.errors) {
      return null;
    }
    for (const code in control.errors) {
      if (control.errors.hasOwnProperty(code)) {
        let message = '';
        switch (code) {
          case 'required':
            message = `${this.controlText} ist ein Plfichtfeld`;
            break;
          case 'minlength':
            message = `${this.controlText} muss mindestens 4 Buchstaben lang sein`;
            break;
          case 'invalidEMail':
            message = 'Bitte gültige EMail angeben...';
            break;
        }
        messages.push(message);
      }
    }
    return messages;
  }
}
