import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

//  https://labs.thisdot.co/blog/loading-components-dynamically-in-angular-9-with-ivy

@Component({
  selector: 'app-dynamic-auth-form',
  template: `
    <div>
      <div #entry></div>
      <ng-template #tmpl>
        Text inside of ng-template, Inside of &lt;div&gt; with #entry template
        reference variable
      </ng-template>
    </div>
  `,
  styles: [
    `
      div {
        padding: 0 10px;
      }
    `,
  ],
})
export class DynamicAuthFormComponent implements OnInit {
  @ViewChild('entry', { read: ViewContainerRef, static: true })
  entry: ViewContainerRef | null = null;

  @ViewChild('tmpl', { static: true }) tmpl: TemplateRef<unknown> | null = null;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    console.log('Entry: ', this.entry);
    console.log('Template Ref Variable: ', this.tmpl);

    if (this.tmpl) {
      this.entry?.createEmbeddedView(this.tmpl);
    }
  }
}
