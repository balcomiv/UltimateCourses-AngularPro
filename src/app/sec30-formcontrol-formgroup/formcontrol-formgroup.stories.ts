import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';

export default {
  title: 'Ultimate Angular Pro/Reactive Forms/30 FormControls && FormGroup',
  //  component: ,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, FormsModule],
    }),
  ],
} as Meta;

export const WithTemplate: Story = () => ({
  template: `
   <div>Story Works!</div>
`,
});
