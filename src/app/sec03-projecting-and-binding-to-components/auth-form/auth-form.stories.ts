import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { User } from '../../shared/user';
import { AuthFormComponent } from './auth-form.component';
import { AuthRememberComponent } from './auth-remember.component';

export default {
  title: 'Ultimate Angular/03 Projecting and Binding to Components',
  component: AuthFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [AuthFormComponent, AuthRememberComponent],
      imports: [CommonModule, FormsModule],
    }),
  ],
} as Meta;

export const Login: Story = () => ({
  template: `
    <div class="app-root">
      <div>
        <app-auth-form>
          <h3>Create Account</h3>
          <button type="submit">
            Join us
          </button>
        </app-auth-form>

        <div class="verticalLine"></div>

        <app-auth-form (submitted)="onSubmit($event)">
          <h3>Login</h3>
          <app-auth-remember
            (checked)="onChecked($event)">
          </app-auth-remember>
          <button type="submit">
            Login
          </button>
        </app-auth-form>
      <div>
    </div>
  `,
  props: {
    onChecked: action('onChecked'),
    onSubmit: (e: User) => {
      console.log('Login', e);
    },
  },
});
