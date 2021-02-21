import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthRememberComponent } from '../sec03-projecting-and-binding-to-components/auth-form/auth-remember.component';

@NgModule({
  declarations: [AuthRememberComponent],
  imports: [CommonModule, FormsModule],
  exports: [AuthRememberComponent],
})
export class SharedModule {}
