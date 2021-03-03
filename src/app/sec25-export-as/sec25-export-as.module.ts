import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TooltipDirective } from './tooltip.directive';
import { ExampleComponent } from './example.component';

@NgModule({
  declarations: [TooltipDirective, ExampleComponent],
  imports: [SharedModule],
  exports: [SharedModule, TooltipDirective],
})
export class Sec25ExportAsModule {}
