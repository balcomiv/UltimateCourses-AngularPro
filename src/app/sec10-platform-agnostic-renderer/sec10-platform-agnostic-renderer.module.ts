import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthFormComponent } from './auth-form/auth-form.component';

@NgModule({
  declarations: [AuthFormComponent],
  imports: [SharedModule],
})
export class Sec10PlatformAgnosticRendererModule {}
