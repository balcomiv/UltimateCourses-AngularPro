import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-one',
  template: `
    <p>
      example-one works!
    </p>
  `,
  styles: [
  ]
})
export class ExampleOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
