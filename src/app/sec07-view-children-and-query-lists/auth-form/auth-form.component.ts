import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRememberComponent } from '../../sec03-projecting-and-binding-to-components/auth-form/auth-remember.component';
import { AuthMessageComponent } from '../../shared/components/auth-message/auth-message.component';
import { User } from '../../shared/user';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styles: [],
})
export class AuthFormComponent implements AfterViewInit, AfterContentInit {
  showOne = new Observable<boolean>();
  showTwo = new Observable<boolean>();
  showThree = new Observable<boolean>();

  @ViewChildren(AuthMessageComponent)
  authMessage: QueryList<AuthMessageComponent> | null = null;

  @ContentChildren(AuthRememberComponent)
  authRememberList: QueryList<AuthRememberComponent> | null = null;

  @Output() submitted = new EventEmitter<User>();

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    //  Note: Not saying this is a good way to handle this. Neither
    //        is setTimeout. Just an example of change detector
    //
    if (this.authMessage) {
      this.authMessage.forEach((message) => {
        console.log(this.authMessage);
        message.days = 30;
      });
      this.cd.detectChanges();
    }
  }

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
