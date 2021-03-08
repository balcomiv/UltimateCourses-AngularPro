import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';
import { Sec31ComponentizingFormgroupsModule } from './sec31-componentizing-formgroups.module';

export default {
  title: 'Ultimate Angular Pro/Reactive Forms/31 Componentizing Form Groups',
  component: StockInventoryComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [Sec31ComponentizingFormgroupsModule],
    }),
  ],
} as Meta;

export const WithTemplate: Story = () => ({
  template: `
    <app-stock-inventory></app-stock-inventory>
`,
});
