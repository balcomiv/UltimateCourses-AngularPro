import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-test-container',
  template: `
    <p>
      test-container works!
    </p>
  `,
  styles: [],
  providers: [TestService],
})
export class TestContainerComponent implements OnInit {
  //  data: Observable<unknown>;

  // constructor(private testService: TestService) {
  //   //  this.data = testService.data;
  // }

  ngOnInit(): void {}
}
