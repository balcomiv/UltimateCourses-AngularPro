import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { DefaultChangeDetectionComponent } from './default-change-detection.component';
import { ExampleComponent } from './example.component';
import { OnpushChangeDetectionComponent } from './onpush-change-detection.component';

export default {
  title:
    'Ultimate Angular Pro/Advanced Components/21 ChangeDetectionStrategy.OnPush && Immutability',
  component: ExampleComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        ExampleComponent,
        DefaultChangeDetectionComponent,
        OnpushChangeDetectionComponent,
      ],
      imports: [CommonModule],
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
