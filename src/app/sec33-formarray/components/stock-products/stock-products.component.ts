import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss'],
})
export class StockProductsComponent implements OnInit {
  @Input() parent = new FormGroup({});

  get stocks(): AbstractControl[] {
    return (this.parent.get('stock') as FormArray).controls;
  }

  constructor() {}

  ngOnInit(): void {}
}
