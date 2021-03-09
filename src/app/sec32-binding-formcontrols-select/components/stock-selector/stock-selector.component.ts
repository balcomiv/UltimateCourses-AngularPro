import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../../shared/interfaces/product';

@Component({
  selector: 'app-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.scss'],
})
export class StockSelectorComponent implements OnInit {
  @Input() parent = new FormGroup({});

  @Input() products: Product[] = [];

  constructor() {}

  ngOnInit(): void {}
}
