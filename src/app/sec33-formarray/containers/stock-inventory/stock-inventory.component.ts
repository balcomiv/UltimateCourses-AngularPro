import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Product } from '../../../shared/interfaces/product';

interface Stock {
  productId: string | number;
  quantity: number;
}

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
  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''),
      code: new FormControl(''),
    }),
    selector: this.createStock({} as Stock),
    stock: new FormArray([
      this.createStock({ productId: 1, quantity: 10 }),
      this.createStock({ productId: 3, quantity: 50 }),
    ]),
  });

  createStock(stock: Stock = { productId: '', quantity: 10 }): FormGroup {
    const productId = +stock.productId || '';
    const quantity = stock.quantity;

    return new FormGroup({
      productId: new FormControl(productId),
      quantity: new FormControl(quantity),
    });
  }

  onSubmit(): void {
    console.log('Submit: ', this.form.value);
  }
}
