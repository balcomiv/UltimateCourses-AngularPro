import { ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { StockInventoryComponent } from './stock-inventory/stock-inventory.component';

export default {
  title: 'Ultimate Angular Pro/Reactive Forms/31 Componentizing Form Groups',
  component: StockInventoryComponent,
  decorators: [
    moduleMetadata({
      declarations: [StockInventoryComponent],
      imports: [ReactiveFormsModule],
    }),
  ],
} as Meta;

export const WithTemplate: Story = () => ({
  template: `
   <app-stock-inventory></app-stock-inventory>
`,
});
