import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../shared/user';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styles: [],
})
export class AuthFormComponent {
  @Output() submitted = new EventEmitter<User>();

  constructor() {}

  onSubmit(value: User): void {
    this.submitted.emit(value);
  }
}
