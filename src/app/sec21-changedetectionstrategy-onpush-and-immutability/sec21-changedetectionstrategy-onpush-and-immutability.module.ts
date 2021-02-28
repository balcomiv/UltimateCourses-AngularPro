import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DefaultChangeDetectionComponent } from './default-change-detection.component';
import { ExampleComponent } from './example.component';
import { OnpushChangeDetectionComponent } from './onpush-change-detection.component';

@NgModule({
  declarations: [
    DefaultChangeDetectionComponent,
    OnpushChangeDetectionComponent,
    ExampleComponent,
  ],
  imports: [CommonModule],
})
export class Sec21ChangedetectionstrategyOnpushAndImmutabilityModule {}
