import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { AuthRememberComponent } from '../../sec03-projecting-and-binding-to-components/auth-form/auth-remember.component';
import { AuthMessageComponent } from '../../shared/components/auth-message/auth-message.component';
import { User } from '../../shared/user';
import { AuthFormComponent } from './auth-form.component';

export default {
  title: 'Ultimate Angular/07 ViewChildren && QueryLists',
  component: AuthFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        AuthFormComponent,
        AuthRememberComponent,
        AuthMessageComponent,
      ],
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
            <app-auth-remember (checked)="onChecked($event)"></app-auth-remember>
            <app-auth-remember (checked)="onChecked($event)"></app-auth-remember>
            <app-auth-remember (checked)="onChecked($event)"></app-auth-remember>
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
