import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-view',
  template: `
    <p>
      test-view works!
    </p>
  `,
  styles: [
  ]
})
export class TestViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
