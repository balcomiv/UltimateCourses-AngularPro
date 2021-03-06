import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { Sec26CustomStructuralDirectiveModule } from '../sec26-custom-structural-directive.module';
import { ExampleComponent } from './example.component';

export default {
  title:
    'Ultimate Angular Pro/Directives/26 Creating a custom structural Directive',
  component: ExampleComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [Sec26CustomStructuralDirectiveModule],
    }),
  ],
} as Meta;

export const WithTemplate: Story = () => ({
  template: `
   <app-example></app-example>
`,
});
