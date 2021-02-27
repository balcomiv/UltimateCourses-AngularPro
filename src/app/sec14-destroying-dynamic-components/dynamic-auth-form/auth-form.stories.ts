import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { User } from '../../shared/user';
import { AuthFormComponent } from '../auth-form/auth-form.component';
import { DynamicAuthFormComponent } from './dynamic-auth-form.component';

export default {
  title: 'Ultimate Angular/14 Destroying Dynamic Components',
  component: AuthFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [AuthFormComponent, DynamicAuthFormComponent],
      imports: [CommonModule, FormsModule],
    }),
  ],
} as Meta;

export const Login: Story = () => ({
  template: `
      <div class="app-root">
        <app-dynamic-auth-form></app-dynamic-auth-form>
      </div>
    `,
  props: {
    onChecked: action('onChecked'),
    onSubmit: (e: User) => {
      console.log('Login', e);
    },
  },
});
