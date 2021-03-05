import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ExampleComponent } from './example.component';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  declarations: [TooltipDirective, ExampleComponent],
  imports: [SharedModule],
  exports: [SharedModule, TooltipDirective, ExampleComponent],
})
export class Sec25ExportAsModule {}
