import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ExampleOneComponent } from './example-one.component';

export default {
  title: 'Ultimate Angular/20 ViewEncapsulation && Shadow DOM',
  component: ExampleOneComponent,
  decorators: [
    moduleMetadata({
      declarations: [ExampleOneComponent],
      imports: [CommonModule, FormsModule],
    }),
  ],
} as Meta;

export const WithTemplate: Story = () => ({
  template: `
   <div>Story Works!</div>
`,
});
