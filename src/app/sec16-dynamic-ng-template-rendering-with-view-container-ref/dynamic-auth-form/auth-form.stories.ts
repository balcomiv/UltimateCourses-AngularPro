import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { DynamicAuthFormComponent } from './dynamic-auth-form.component';

export default {
  title: 'Ultimate Angular/16 Dynamic <ng-template> Rendering',
  component: DynamicAuthFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [DynamicAuthFormComponent],
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
});
