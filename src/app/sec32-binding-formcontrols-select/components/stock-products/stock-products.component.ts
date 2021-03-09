import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss'],
})
export class StockProductsComponent implements OnInit {
  @Input() parent = new FormGroup({});

  constructor() {}

  ngOnInit(): void {}
}
