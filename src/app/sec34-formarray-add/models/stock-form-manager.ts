import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FormManager } from '../../shared/models/form-manager';

export interface StockFormValue {
  productId: string;
  quantity: number | null;
}

export class StockFormManager extends FormManager {
  constructor(form: FormGroup) {
    super(form);
  }

  static createStockFormGroup(
    stock: StockFormValue = {
      productId: '',
      quantity: 10,
    }
  ): FormGroup {
    const productId = +stock.productId || '';
    const quantity = stock.quantity;

    return new FormGroup({
      productId: new FormControl(productId),
      quantity: new FormControl(quantity),
    });
  }

  //#region Control Value Getters

  getSelectedStockFormGroupValue(): StockFormValue {
    const selectedStockItem = this.getSelectedStockFormGroup().value;

    if (!this.isStockItem(selectedStockItem)) {
      throw new Error('Invalid Form Control for Stock Selector');
    }

    return selectedStockItem;
  }

  //#endregion

  //#region Control Getters

  getSelectedStockFormGroup(): FormGroup {
    const selectedStockFormGroup = this.form.get('selector');

    if (!(selectedStockFormGroup instanceof FormGroup)) {
      throw new Error('Invalid Form Control for Stock Selector');
    }

    return selectedStockFormGroup;
  }

  getStockFormArray(): FormArray {
    const control = this.form.get('stock') as FormArray;

    if (!(control instanceof FormArray)) {
      throw new Error('Invalid FormArray for Stock');
    }

    return control;
  }

  //#endregion

  //#region Utilities

  convertToStock(stock: StockFormValue): Stock | null {
    if (stock.productId === '' || stock.quantity === null) {
      return null;
    }

    return {
      productId: +stock.productId,
      quantity: stock.quantity,
    };
  }

  isStockItem(value: unknown): value is StockFormValue {
    return (
      (value as Stock).quantity !== undefined &&
      (value as Stock).quantity !== undefined
    );
  }

  //#endregion
}
