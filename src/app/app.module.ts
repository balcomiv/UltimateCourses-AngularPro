import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthFormComponent } from './sec02-content-projection-slots/auth-form/auth-form.component';
import { Sec02ContentProjectionSlotsModule } from './sec02-content-projection-slots/sec02-content-projection-slots.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, Sec02ContentProjectionSlotsModule],
  providers: [AuthFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
