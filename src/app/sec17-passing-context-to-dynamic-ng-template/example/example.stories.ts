import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ExampleComponent } from './example.component';

export default {
  title:
    'Ultimate Angular Pro/Advanced Components/17 Passing Context to Dynamic <ng-template>',
  component: ExampleComponent,
  decorators: [
    moduleMetadata({
      declarations: [ExampleComponent],
      imports: [CommonModule, FormsModule],
    }),
  ],
} as Meta;

export const Example: Story = () => ({
  template: `
  <div class="app-root" style="padding: 15px;">
    <app-example></app-example>
  </div>
`,
});
