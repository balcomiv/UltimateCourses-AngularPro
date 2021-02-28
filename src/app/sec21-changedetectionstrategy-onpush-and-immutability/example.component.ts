import { Component } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'app-example',
  template: `
    <div>
      <button (click)="addProp()">Add Property</button>
      <button (click)="changeUser()">Change User Object</button>
      <button (click)="changeName()">Change Name Property</button>
      <div class="users">
        <app-default-change-detection
          [user]="user"
        ></app-default-change-detection>
        <app-onpush-change-detection
          [user]="user"
        ></app-onpush-change-detection>
      </div>
    </div>
  `,
  styleUrls: ['./styles.scss'],
})
export class ExampleComponent {
  user = {
    name: 'Mark Hop',
    age: 44,
    location: 'California',
  } as User;

  addProp(): void {
    //  Mutating for example. We want to be immutable in real life scenarios
    this.user.email = 'blink@blink-182.net';
  }

  changeName(): void {
    //  Mutating for example. We want to be immutable in real life scenarios
    this.user.name = 'Travis Barker';
  }

  changeUser(): void {
    this.user = {
      name: 'Tom Daily',
      age: 41,
      location: 'California',
    } as User;
  }
}
