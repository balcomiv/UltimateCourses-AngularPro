import { Directive } from '@angular/core';

@Directive({
  selector: '[appTest]',
  exportAs: 'test',
})
export class TestDirective {
  constructor() {
    console.log('===> Test Test');
  }
}
