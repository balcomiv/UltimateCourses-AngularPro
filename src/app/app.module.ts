import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDirective } from './test.directive';

@NgModule({
  declarations: [AppComponent, TestDirective],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  //  providers: [AuthFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
