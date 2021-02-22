import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthRememberComponent } from '../sec03-projecting-and-binding-to-components/auth-form/auth-remember.component';
import { AuthMessageComponent } from './components/auth-message/auth-message.component';

@NgModule({
  declarations: [AuthRememberComponent, AuthMessageComponent],
  imports: [CommonModule, FormsModule],
  exports: [
    CommonModule,
    FormsModule,
    AuthRememberComponent,
    AuthMessageComponent,
  ],
})
export class SharedModule {}
