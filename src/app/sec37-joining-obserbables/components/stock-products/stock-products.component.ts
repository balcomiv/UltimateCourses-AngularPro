import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StockFormManager } from '../../models/stock-form-manager';

export interface RemovedStock {
  stockFormGroup: FormGroup;
  index: number;
}

@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss'],
})
export class StockProductsComponent {
  @Input() set formManager(formManager: StockFormManager) {
    this._formManager = formManager;
  }

  get formManager(): StockFormManager {
    if (!this._formManager) {
      throw new Error('Missing Form Manager!');
    }

    return this._formManager;
  }

  get parent(): FormGroup {
    return this.formManager.form;
  }

  private _formManager: StockFormManager | null = null;

  get stocks(): FormGroup[] {
    return this.formManager.getStockFormArrayFormGroups();
  }

  @Output() remove = new EventEmitter<RemovedStock>();

  constructor() {}

  onRemove(stockFormGroup: FormGroup, index: number): void {
    this.remove.emit({ stockFormGroup, index });
  }
}
