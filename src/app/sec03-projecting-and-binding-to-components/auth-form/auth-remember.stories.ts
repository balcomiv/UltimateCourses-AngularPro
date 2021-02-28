import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { action } from '@storybook/addon-actions';
import { moduleMetadata, Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { AuthRememberComponent } from './auth-remember.component';

export default {
  title: 'Ultimate Angular Pro/Advanced Components/Auth Remember',
  component: AuthRememberComponent,
  decorators: [
    moduleMetadata({
      declarations: [AuthRememberComponent],
      imports: [CommonModule, FormsModule],
    }),
  ],
} as Meta;

const Template: Story<AuthRememberComponent> = (
  args: AuthRememberComponent
) => ({
  component: AuthRememberComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  //   primary: true,
  //   label: 'Button',
};

export const WithTemplate: Story = () => ({
  template: `
   <app-auth-remember (checked)="onChecked($event)"></app-auth-remember>
`,
  props: {
    onChecked: action('onChecked'),
  },
});

const TemplateTwo: Story<AuthRememberComponent> = (
  args: AuthRememberComponent
) => ({
  template: `
    <app-auth-remember"></app-auth-remember>
  `,
  props: args,
});

export const Secondary = Template.bind({});
Secondary.args = {
  //   primary: true,
  //   label: 'Button',
};
