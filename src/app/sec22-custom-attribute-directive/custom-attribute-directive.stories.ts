import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { CreditCardDirective } from './credit-card.directive';

export default {
  title: 'Ultimate Angular Pro/Directives/22 Custom Attribute Directives',
  //  component: ,
  decorators: [
    moduleMetadata({
      declarations: [CreditCardDirective],
      imports: [],
    }),
  ],
} as Meta;

export const WithTemplate: Story = () => ({
  template: `
    <input
      appCreditCard
      placeholder="Input example"
    >
`,
});
