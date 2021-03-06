import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
  items = [
    {
      name: 'Mark Hop',
      age: 44,
      location: 'California',
    },
    {
      name: 'Tom Delaney',
      age: 41,
      location: 'California',
    },
    {
      name: 'Travis Barker',
      age: 41,
      location: 'California',
    },
  ];

  constructor() {
    setTimeout(() => {
      this.items = [
        ...this.items,
        { name: 'Matt Sketch', age: 40, location: 'California' },
      ];
    }, 2000);
  }
}
