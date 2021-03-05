import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sec25ExportAsModule } from './sec25-export-as/sec25-export-as.module';
import { TestDirective } from './test.directive';

@NgModule({
  declarations: [AppComponent, TestDirective],
  imports: [BrowserModule, AppRoutingModule, CommonModule, Sec25ExportAsModule],
  //  providers: [AuthFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
