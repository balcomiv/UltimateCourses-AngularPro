import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <div>
      <div #entry>
        <ng-template #tmpl let-name let-location="location">
          {{ name }} : {{ location }}
        </ng-template>
      </div>
    </div>
  `,
  styles: [],
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('tmpl') tmpl: TemplateRef<unknown> | null = null;

  @ViewChild('entry', { read: ViewContainerRef })
  entry: ViewContainerRef | null = null;

  constructor() {}

  ngAfterViewInit(): void {
    if (this.tmpl) {
      this.entry?.createEmbeddedView(this.tmpl, {
        $implicit: 'Motto Todd',
        location: 'UK, England',
      });
    }
  }
}
