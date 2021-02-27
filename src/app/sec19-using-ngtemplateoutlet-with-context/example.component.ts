import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <div>
      <ng-container *ngTemplateOutlet="tmpl; context: ctx"></ng-container>

      <ng-template #tmpl let-name let-location="location">
        {{ name }} : {{ location }}
      </ng-template>
    </div>
  `,
  styles: [],
})
export class ExampleComponent implements OnInit {
  ctx = {
    $implicit: 'Todd Motto',
    location: 'England, UK',
  };

  constructor() {}

  ngOnInit(): void {}
}
