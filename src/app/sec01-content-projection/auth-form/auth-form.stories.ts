import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { AuthFormComponent } from './auth-form.component';

export default {
  title: 'Ultimate Angular/01 Content Projection',
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

export const CreateAccount = () => ({
  template: `
    <div class="app-root">
        <app-auth-form>
            <h3>Create Account</h3>
        </app-auth-form>
    </div>
  `,
});

export const Login = () => ({
  template: `
    <div class="app-root">
        <app-auth-form>
            <h3>Login</h3>
        </app-auth-form>
    </div>
  `,
});

export const TemplateBindExample = Template.bind({});
