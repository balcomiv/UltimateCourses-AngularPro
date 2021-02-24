import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sec09ElementRefAndNativeElement } from './sec09-element-ref-and-native-element/sec09-element-ref-and-native-element.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, Sec09ElementRefAndNativeElement],
  //  providers: [AuthFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
