import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { TestViewComponent } from './test-view.component';

export default {
  title: 'Ultimate Angular Pro/A Test Stack',
  component: TestViewComponent,
  decorators: [
    moduleMetadata({
      declarations: [TestViewComponent],
      imports: [CommonModule, ReactiveFormsModule],
    }),
  ],
} as Meta;

export const withTemplate: Story<TestViewComponent> = () => ({
  template: `
   <app-test-view></app-test-view>
`,
});
