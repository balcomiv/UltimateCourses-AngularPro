import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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

  //#region Control Getters

  getSelectedStockFormGroup(): FormGroup {
    const selectedStockFormGroup = this.form.get('selector');

    if (!(selectedStockFormGroup instanceof FormGroup)) {
      throw new Error('Invalid Form Control for Stock Selector');
    }

    return selectedStockFormGroup;
  }

  getSelectedStockFormGroupValueChanges(): Observable<StockFormValue> {
    return this.getSelectedStockFormGroup().valueChanges.pipe(
      map((value) => {
        if (!this.isStockFormValue(value)) {
          throw new Error(
            'Invalid Stock Item for Stock FormGroup ValueChanges'
          );
        }

        return value;
      })
    );
  }

  getStockSelectorProductIdFormControl(): FormControl {
    const formControl = this.form.get('selector.productId');

    console.log('Product Id FormControl: ', formControl);

    if (!(formControl instanceof FormControl)) {
      throw new Error('Invalid FormControl for Stock ProductId');
    }

    return formControl;
  }

  getStockSelectorProductIdValueChanges(): Observable<string> {
    return this.getStockSelectorProductIdFormControl().valueChanges.pipe(
      tap((value) => console.log('Tap ProductId: ', value)),
      map((value) => {
        if (!(typeof value === 'string')) {
          throw new Error('Invalid ProductId for Stock Selector');
        }
        return value;
      })
    );
  }

  getStockFormArray(): FormArray {
    const control = this.form.get('stock') as FormArray;

    if (!(control instanceof FormArray)) {
      throw new Error('Invalid FormArray for Stock');
    }

    return control;
  }

  getStockFormArrayFormGroups(): FormGroup[] {
    const controls = this.getStockFormArray().controls;

    if (!this.isFormGroupArray(controls)) {
      throw new Error('Invalid FormGroup Array for Stock');
    }

    return controls;
  }

  //#endregion

  //#region Control Value Getters

  getSelectedStockFormGroupValue(): StockFormValue {
    const selectedStockItem = this.getSelectedStockFormGroup().value;

    if (!this.isStockFormValue(selectedStockItem)) {
      throw new Error('Invalid Form Control for Stock Selector');
    }

    return selectedStockItem;
  }

  //#endregion

  //#region Control value Setters

  resetStockSelectorFormGroup(): void {
    this.getSelectedStockFormGroup().reset(
      {
        productId: '',
        quantity: 10,
      },
      { emitEvent: false }
    );
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

  isStockFormValue(value: unknown): value is StockFormValue {
    return (
      (value as Stock).quantity !== undefined &&
      (value as Stock).quantity !== undefined
    );
  }

  isFormGroupArray(value: unknown[]): value is FormGroup[] {
    return value.length === 0 || value[0] instanceof FormGroup;
  }

  //#endregion
}
