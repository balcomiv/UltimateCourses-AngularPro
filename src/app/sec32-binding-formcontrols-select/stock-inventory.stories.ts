import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';
import { Sec32BindingFormcontrolsSelectModule } from './sec32-binding-formcontrols-select.module';

export default {
  title:
    'Ultimate Angular Pro/Reactive Forms/32 Binding FormControls to <select>',
  component: StockInventoryComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [Sec32BindingFormcontrolsSelectModule],
    }),
  ],
} as Meta;

export const WithTemplate: Story = () => ({
  template: `
    <app-stock-inventory></app-stock-inventory>
`,
});
