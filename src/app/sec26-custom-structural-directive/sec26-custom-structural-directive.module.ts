import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [ExampleComponent],
  imports: [CommonModule],
  exports: [ExampleComponent],
})
export class Sec26CustomStructuralDirectiveModule {}
