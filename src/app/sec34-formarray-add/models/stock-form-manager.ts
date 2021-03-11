import { FormGroup } from '@angular/forms';
import { FormManager } from '../../shared/models/form-manager';

export interface StockFormValue {
  productId: string;
  quantity: number | null;
}

export class StockFormManager extends FormManager {
  constructor(form: FormGroup) {
    super(form);
  }

  getSelectedStockItem(): StockFormValue | null {
    const selectedStockItem = this.form.get('selector')?.value; // Note: Selector is a FormGroup

    if (!this.isStockItem(selectedStockItem)) {
      throw new Error('Invalid Form Control for Stock Selector');
    }

    //  return this.convertToStock(selectedStockItem);
    return selectedStockItem;
  }

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
}
