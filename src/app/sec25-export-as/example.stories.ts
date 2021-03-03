import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ExampleComponent } from './example.component';
import { TooltipDirective } from './tooltip.directive';

export default {
  title:
    'Ultimate Angular Pro/Directives/25 Using the exportAs property with template refs',
  //  component:  ,
  decorators: [
    moduleMetadata({
      declarations: [ExampleComponent, TooltipDirective],
      imports: [],
    }),
  ],
} as Meta;

export const WithTemplate: Story = () => ({
  template: `
    <app-example></app-example>
`,
});
