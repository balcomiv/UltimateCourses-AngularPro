import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-test-view',
  template: `
    <p>
      test-view works!
    </p>

    <input type="text" [formControl]="testInput" />
  `,
  styles: [],
})
export class TestViewComponent implements OnInit {
  testInput = new FormControl('');

  constructor() {
    this.testInput.valueChanges.subscribe((val) =>
      console.log('ValueChanges: ', val)
    );
  }

  ngOnInit(): void {}
}
