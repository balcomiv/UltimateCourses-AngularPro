import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sec11DynamicComponentsWithComponentFactoryResolverModule } from './sec11-dynamic-components-with-component-factory-resolver/sec11-dynamic-components-with-component-factory-resolver.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Sec11DynamicComponentsWithComponentFactoryResolverModule,
  ],
  //  providers: [AuthFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
