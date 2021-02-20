import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-auth-remember',
  template: `
    <label>
      <input
        #rememberMe
        type="checkbox"
        (change)="onChecked(rememberMe.checked)"
      />
      Keep me logged in
    </label>
  `,
  styles: [
    `
      label {
        display: block;
      }
    `,
  ],
})
export class AuthRememberComponent {
  @Output() checked = new EventEmitter<boolean>();

  onChecked(checked: boolean): void {
    this.checked.emit(checked);
  }
}
