import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRememberComponent } from '../../sec03-projecting-and-binding-to-components/auth-form/auth-remember.component';
import { AuthMessageComponent } from '../../shared/components/auth-message/auth-message.component';
import { User } from '../../shared/user';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styles: [
    `
      .email {
        border-color: #9f72e6;
      }
    `,
  ],
})
export class AuthFormComponent
  implements OnInit, AfterViewInit, AfterContentInit {
  showMessage = new Observable<boolean>();

  @ViewChild('email') email: ElementRef<HTMLInputElement> | null = null;

  @ViewChild(AuthMessageComponent, { static: true })
  authMessage: AuthMessageComponent | null = null;

  @ContentChild(AuthRememberComponent)
  authRemember: AuthRememberComponent | null = null;

  @Output() submitted = new EventEmitter<User>();

  ngOnInit(): void {
    //  Note: I can access authMessage ViewChild here because I made it { static: true }
    //
    if (this.authMessage) {
      this.authMessage.days = 30;
    }
    console.log(this.authMessage);
  }

  ngAfterViewInit(): void {
    console.log(`Email: `, this.email);
    this.email?.nativeElement.setAttribute('placeholder', 'Enter your email');
    this.email?.nativeElement.classList.add('email');
    this.email?.nativeElement.focus();
  }

  ngAfterContentInit(): void {
    if (this.authRemember) {
      console.log(this.authRemember);
      this.showMessage = this.authRemember.checked as Observable<boolean>;
    }
  }

  onSubmit(value: User): void {
    this.submitted.emit(value);
  }
}
