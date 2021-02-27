import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExampleOneComponent } from './example-one.component';
import { ExampleTwoComponent } from './example-two.component';
import { ExampleThreeComponent } from './example-three.component';

@NgModule({
  declarations: [ExampleOneComponent, ExampleTwoComponent, ExampleThreeComponent],
  imports: [CommonModule],
})
export class Sec20ViewencapsulationAndShadowDomModule {}
