import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../../shared/interfaces/product';
import {
  StockFormManager,
  StockFormValue,
} from '../../models/stock-form-manager';

@Component({
  selector: 'app-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.scss'],
})
export class StockSelectorComponent {
  @Input() set formManager(formManager: StockFormManager) {
    this._formManager = formManager;
  }

  get formManager(): StockFormManager {
    if (!this._formManager) {
      throw new Error('Missing Form Manager!');
    }

    return this._formManager;
  }

  private _formManager: StockFormManager | null = null;

  @Input() products: Product[] = [];

  @Output() add = new EventEmitter<StockFormValue>();

  get parent(): FormGroup {
    return this.formManager.form;
  }

  onAdd(): void {
    const selectedStockItem = this.formManager.getSelectedStockFormGroupValue();
    console.log('Selector value', selectedStockItem);

    this.add.emit(selectedStockItem);
  }
}
