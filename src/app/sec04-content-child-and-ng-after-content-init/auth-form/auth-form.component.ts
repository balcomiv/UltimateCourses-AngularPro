import {
  AfterContentInit,
  Component,
  ContentChild,
  EventEmitter,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRememberComponent } from '../../sec03-projecting-and-binding-to-components/auth-form/auth-remember.component';
import { User } from '../../shared/user';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styles: [],
})
export class AuthFormComponent implements AfterContentInit {
  showMe = new Observable<boolean>();

  @ContentChild(AuthRememberComponent)
  authRemember: AuthRememberComponent | null = null;

  @Output() submitted = new EventEmitter<User>();

  ngAfterContentInit(): void {
    console.log('===> ngAfterContentInit', this.authRemember);
    if (this.authRemember) {
      console.log(this.authRemember);
      this.showMe = this.authRemember.checked as Observable<boolean>;
    }
  }

  onSubmit(value: User): void {
    this.submitted.emit(value);
  }
}
