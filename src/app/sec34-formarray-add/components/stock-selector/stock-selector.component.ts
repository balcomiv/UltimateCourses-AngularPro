import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
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
export class StockSelectorComponent implements OnInit {
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

  addDisabled$ = new Observable<boolean>().pipe(startWith(true));

  ngOnInit(): void {
    this.onChanges();
  }

  onChanges(): void {
    this.addDisabled$ = this.formManager
      .getStockSelectorProductIdValueChanges()
      .pipe(
        tap((value) => console.log('Tap: ', value)),
        startWith('1'),
        map((value) => {
          return !value;
        })
      );
    // .subscribe((productId) => {
    //   this.productId = productId;
    //   console.log('ValueChanges: ', productId);
    // });
  }

  onAdd(): void {
    const selectedStockItem = this.formManager.getSelectedStockFormGroupValue();
    console.log('Selector value', selectedStockItem);

    this.add.emit(selectedStockItem);

    this.formManager.resetStockSelectorFormGroup();
  }
}
