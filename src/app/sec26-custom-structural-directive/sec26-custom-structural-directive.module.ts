import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExampleComponent } from './example/example.component';
import { MyForDirective } from './my-for.directive';

@NgModule({
  declarations: [ExampleComponent, MyForDirective],
  imports: [CommonModule],
  exports: [ExampleComponent, MyForDirective],
})
export class Sec26CustomStructuralDirectiveModule {}
