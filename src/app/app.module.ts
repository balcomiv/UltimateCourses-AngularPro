import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TestContainerComponent } from './a-test-stack/containers/test-container/test-container.component';
import { TestViewComponent } from './a-test-stack/views/test-view/test-view.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sec25ExportAsModule } from './sec25-export-as/sec25-export-as.module';
import { TestDirective } from './test.directive';
//  import { TestComponent } from './a-test-stack/services/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestDirective,
    TestContainerComponent,
    TestViewComponent,
  ], // , TestComponent],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    Sec25ExportAsModule,
  ],
  //  providers: [AuthFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
