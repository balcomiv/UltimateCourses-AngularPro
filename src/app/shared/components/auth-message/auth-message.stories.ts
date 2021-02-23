import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { AuthMessageComponent } from './auth-message.component';

export default {
  title: 'Shared/AuthMessage',
  component: AuthMessageComponent,
  decorators: [
    moduleMetadata({
      declarations: [AuthMessageComponent],
      imports: [],
    }),
  ],
} as Meta;

const Template: Story<AuthMessageComponent> = (args: AuthMessageComponent) => ({
  component: AuthMessageComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};

export const WithTemplate: Story = () => ({
  template: `
   <app-auth-message></app-auth-message>
`,
});
