import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { DynamicAuthFormComponent } from './dynamic-auth-form/dynamic-auth-form.component';

@NgModule({
  declarations: [AuthFormComponent, DynamicAuthFormComponent],
  imports: [SharedModule],
  exports: [DynamicAuthFormComponent],
})
export class Sec11DynamicComponentsWithComponentFactoryResolverModule {}
