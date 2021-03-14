import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Product } from '../../../shared/interfaces/product';
import { RemovedStock } from '../../components/stock-products/stock-products.component';
import {
  StockFormManager,
  StockFormValue,
} from '../../models/stock-form-manager';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss'],
})
export class StockInventoryComponent {
  products: Product[] = [
    { id: 1, price: 2800, name: 'MacBook Pro' },
    { id: 2, price: 50, name: 'USB-C Adaptor' },
    { id: 3, price: 400, name: 'iPod' },
    { id: 4, price: 900, name: 'iPhone' },
    { id: 5, price: 600, name: 'Apple Watch' },
  ];

  //  Can initiate form up here because it is a static form group
  formManager = new StockFormManager(
    new FormGroup({
      store: new FormGroup({
        branch: new FormControl(''),
        code: new FormControl(''),
      }),
      selector: StockFormManager.createStockFormGroup(),
      stock: new FormArray([
        StockFormManager.createStockFormGroup({ productId: '1', quantity: 10 }),
        StockFormManager.createStockFormGroup({ productId: '3', quantity: 50 }),
      ]),
    })
  );

  form = this.formManager.form;

  onAddStock(stock: StockFormValue): void {
    console.log('onAddStock: ', stock);

    const control = this.formManager.getStockFormArray();
    control.push(StockFormManager.createStockFormGroup(stock));
  }

  onRemoveStock({ stockFormGroup, index }: RemovedStock): void {
    console.log('Removing');
    const formArray = this.formManager.getStockFormArray();
    formArray.removeAt(index);
  }

  onSubmit(): void {
    console.log('Submit: ', this.form.value);
  }
}
