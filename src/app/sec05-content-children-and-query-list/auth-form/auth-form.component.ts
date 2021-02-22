import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Output,
  QueryList,
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
  showOne = new Observable<boolean>();
  showTwo = new Observable<boolean>();
  showThree = new Observable<boolean>();

  @ContentChildren(AuthRememberComponent)
  authRememberList: QueryList<AuthRememberComponent> | null = null;

  @Output() submitted = new EventEmitter<User>();

  ngAfterContentInit(): void {
    console.log('===> ngAfterContentInit', this.authRememberList);
    if (this.authRememberList) {
      console.log(this.authRememberList);

      this.authRememberList.forEach((item, index) => {
        console.log(`Item #${index}: `, item);
        if (index === 0) {
          this.showOne = item.checked as Observable<boolean>;
        } else if (index === 1) {
          this.showTwo = item.checked as Observable<boolean>;
        } else if (index === 2) {
          this.showThree = item.checked as Observable<boolean>;
        }
      });
    }
  }

  onSubmit(value: User): void {
    this.submitted.emit(value);
  }
}
