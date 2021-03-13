import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  onSubmit(event: unknown): void {}
  onChecked(event: unknown): void {
    // Testing on false deprecation error
    // interval(1000).subscribe((val) => console.log(val));
    // interval(1000).subscribe({
    //   next: () => console.log('test'),
    //   error: () => console.log('test'),
    //   complete: () => console.log('test'),
    // });
  }
}
