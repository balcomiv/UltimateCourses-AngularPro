import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { User } from '../../shared/user';
import { AuthFormComponent } from '../auth-form/auth-form.component';

//  https://labs.thisdot.co/blog/loading-components-dynamically-in-angular-9-with-ivy

@Component({
  selector: 'app-dynamic-auth-form',
  template: `
    <div>
      <div #entry></div>
    </div>
  `,
  styles: [],
})
export class DynamicAuthFormComponent implements OnInit {
  @ViewChild('entry', { read: ViewContainerRef, static: true })
  entry: ViewContainerRef | null = null;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    const authFormFactory = this.resolver.resolveComponentFactory(
      AuthFormComponent
    );
    const component = this.entry?.createComponent(authFormFactory);
    console.log('===> Component: ', component?.instance);
    if (component?.instance) {
      component.instance.title = 'New Login';

      component.instance.submitted.subscribe((value) =>
        console.log('===> Submitted: ', value)
      );
    }
  }

  loginUser(user: User): void {
    console.log('Login: ', user);
  }
}
