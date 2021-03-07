import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainersComponent } from './stock-inventory/containers/containers.component';

@NgModule({
  declarations: [ContainersComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class Sec29ReactiveFormsSetupModule {}
