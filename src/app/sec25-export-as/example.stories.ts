import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ExampleComponent } from './example.component';
import { TooltipDirective } from './tooltip.directive';

export default {
  title:
    'Ultimate Angular Pro/Directives/25 Using the exportAs property with template refs',
  //  component: ExampleComponent,
  decorators: [
    moduleMetadata({
      declarations: [ExampleComponent, TooltipDirective],
      imports: [],
    }),
  ],
} as Meta;

export const WithTemplate: Story = () => ({
  //  component: ExampleComponent,
  template: `
    <app-example class="app-root">
    <ng-template #testTemplate>
      <label appTooltip="3 digits, back of your card" #myTooltip="tooltip">
        Enter your security code
        <span (mouseover)="myTooltip.show()" (mouseout)="myTooltip.hide()">
          (?)
        </span>
        <input type="text" />
      </label>
    </ng-template>
    </app-example>
`,
});
