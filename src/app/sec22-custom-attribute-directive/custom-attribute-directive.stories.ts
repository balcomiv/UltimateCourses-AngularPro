import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';

export default {
  title: 'Ultimate Angular Pro/Directives/22 Custom Attribute Directives',
  //  component: ,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
    }),
  ],
} as Meta;

export const WithTemplate: Story = () => ({
  template: `
   <div>Story Works!</div>
`,
});
