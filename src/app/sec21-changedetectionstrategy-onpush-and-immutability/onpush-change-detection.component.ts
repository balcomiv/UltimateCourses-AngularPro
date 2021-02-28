import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'app-onpush-change-detection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="on-push-example">
      <h4>{{ user?.name }}</h4>
      <h5>{{ user?.age }} years old</h5>
      {{ user?.location }} <br />
      {{ user?.email }}

      <button (click)="update()">Internal Update</button>
      <p>* should not update</p>
    </div>
  `,
  styleUrls: ['./styles.scss'],
})
export class OnpushChangeDetectionComponent {
  @Input() user: User | null = null;

  update(): void {
    if (this.user) {
      this.user.name = 'Jim Bob';
    }
  }
}
