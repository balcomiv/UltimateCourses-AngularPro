import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { AuthRememberComponent } from './auth-form/auth-remember.component';

@NgModule({
  declarations: [AuthFormComponent, AuthRememberComponent],
  imports: [CommonModule, FormsModule],
})
export class Sec03ProjectingAndBindingToComponentsModule {}
