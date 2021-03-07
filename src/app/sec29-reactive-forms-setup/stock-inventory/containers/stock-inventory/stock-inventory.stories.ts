import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { StockInventoryComponent } from './stock-inventory.component';

export default {
  title: 'Ultimate Angular Pro/Reactive Forms/29 Reactive Forms Setup',
  component: StockInventoryComponent,
  decorators: [
    moduleMetadata({
      declarations: [StockInventoryComponent],
      imports: [],
    }),
  ],
} as Meta;

export const WithTemplate: Story = () => ({
  template: `
   <app-stock-inventory></app-stock-inventory>
`,
});
