import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';
import { Sec34FormarrayAddModule } from './sec34-formarray-add.module';

export default {
  title:
    'Ultimate Angular Pro/Reactive Forms/34-35 Adding && Removing items utilizing FormArray',
  component: StockInventoryComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [Sec34FormarrayAddModule],
    }),
  ],
} as Meta;

export const withTemplate: Story = () => ({
  template: `
    <app-stock-inventory></app-stock-inventory>
`,
});
