import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';
import { Sec33FormarrayModule } from './sec33-formarray.module';

export default {
  title:
    'Ultimate Angular Pro/Reactive Forms/33 FormGroup Collections with FormArray',
  component: StockInventoryComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [Sec33FormarrayModule],
    }),
  ],
} as Meta;

export const WithTemplate: Story = () => ({
  template: `
    <app-stock-inventory></app-stock-inventory>
`,
});
