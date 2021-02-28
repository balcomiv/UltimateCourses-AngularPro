import { Component, Input } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'app-default-change-detection',
  template: `
    <div class="default-example">
      <h2>Default</h2>
      <h4>{{ user?.name }}</h4>
      <h5>{{ user?.age }} years old</h5>
      {{ user?.location }} <br />
      {{ user?.email }} <br />

      <button (click)="update()">Internal Update</button>
      <p>* should update</p>
    </div>
  `,
  styleUrls: ['./styles.scss'],
})
export class DefaultChangeDetectionComponent {
  @Input() user: User | null = null;

  update(): void {
    if (this.user) {
      this.user.name = 'Jim Bob';
    }
  }
}
