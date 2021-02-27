import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { AuthFormComponent } from '../auth-form/auth-form.component';

//  https://labs.thisdot.co/blog/loading-components-dynamically-in-angular-9-with-ivy

@Component({
  selector: 'app-dynamic-auth-form',
  template: `
    <button (click)="destroyComponent()">Destroy Component</button>
    <div>
      <div #entry></div>
    </div>
  `,
  styles: [],
})
export class DynamicAuthFormComponent implements OnInit {
  @ViewChild('entry', { read: ViewContainerRef, static: true })
  entry: ViewContainerRef | null = null;

  component: ComponentRef<AuthFormComponent> | null = null;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    const authFormFactory = this.resolver.resolveComponentFactory(
      AuthFormComponent
    );

    this.component = this.entry
      ? this.entry.createComponent(authFormFactory)
      : null;

    console.log('===> Component: ', this.component?.instance);

    if (this.component?.instance) {
      this.component.instance.title = 'New Login';

      this.component.instance.submitted.subscribe((value) =>
        console.log('===> Submitted: ', value)
      );
    }
  }

  destroyComponent(): void {
    this.component?.destroy();
  }
}
