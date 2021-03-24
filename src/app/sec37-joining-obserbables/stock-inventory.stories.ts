import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';
import { Sec37JoiningObservablesModule } from './sec37-joining-observables.module';

export default {
  title:
    'Ultimate Angular Pro/Reactive Forms/37 Http Service and Joining Observables',
  component: StockInventoryComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [Sec37JoiningObservablesModule],
    }),
  ],
} as Meta;

export const withTemplate: Story = () => ({
  template: `
    <app-stock-inventory></app-stock-inventory>
`,
});
