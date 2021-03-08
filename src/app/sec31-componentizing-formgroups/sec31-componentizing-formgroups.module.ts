import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StockInventoryComponent } from './stock-inventory/stock-inventory.component';
import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
import { StockProductsComponent } from './components/stock-products/stock-products.component';

@NgModule({
  declarations: [StockInventoryComponent, StockBranchComponent, StockProductsComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class Sec31ComponentizingFormgroupsModule {}
