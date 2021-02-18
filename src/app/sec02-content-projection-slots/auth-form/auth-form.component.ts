import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../sec01-content-projection/user';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styles: [],
})
export class AuthFormComponent {
  @Output() submitted = new EventEmitter<User>();

  onSubmit(value: User): void {
    this.submitted.emit(value);
  }
}
