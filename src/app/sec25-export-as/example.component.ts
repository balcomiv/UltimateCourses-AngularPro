import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <label appTooltip="3 digits, back of your card" #myTooltip="tooltip">
      Enter your security code
      <span (mouseover)="myTooltip.show()" (mouseout)="myTooltip.hide()">
        (?)
      </span>
      <input type="text" />
    </label>
  `,
  styleUrls: ['./styles.scss'],
})
export class ExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
