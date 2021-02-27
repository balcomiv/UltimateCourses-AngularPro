import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <div>
      <ng-container *ngTemplateOutlet="tmpl"></ng-container>
      <ng-template #tmpl>
        Todd Motto : England, UK
      </ng-template>
    </div>
  `,
  styles: [],
})
export class ExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
