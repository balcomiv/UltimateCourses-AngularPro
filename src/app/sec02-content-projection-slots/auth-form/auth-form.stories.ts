import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { AuthFormComponent } from './auth-form.component';

export default {
  title: 'Ultimate Angular Pro/Advanced Components/02 Content Projection Slots',
  component: AuthFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [AuthFormComponent],
      imports: [CommonModule, FormsModule],
    }),
  ],
} as Meta;

const Template: Story<AuthFormComponent> = (args: AuthFormComponent) => ({
  component: AuthFormComponent,
  props: args,
});

export const Login = () => ({
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

        <app-auth-form>
          <h3>Login</h3>
          <button type="submit">
            Login
          </button>
        </app-auth-form>
      <div>
    </div>
  `,
});
