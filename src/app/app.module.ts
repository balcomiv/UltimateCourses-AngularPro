import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sec06ViewChildAndNgAfterViewInitModule } from './sec06-view-child-and-ng-after-view-init/sec06-view-child-and-ng-after-view-init.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Sec06ViewChildAndNgAfterViewInitModule,
  ],
  //  providers: [AuthFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
