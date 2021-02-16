import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content></ng-content>
        <label for="email">
          Email Address
          <input type="text" />
        </label>
        <label for="password ">
          Password
          <input type="text" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  `,
  styles: [],
})
export class AuthFormComponent {
  @Output() submitted = new EventEmitter<User>();

  onSubmit(value: User): void {
    this.submitted.emit(value);
  }
}
