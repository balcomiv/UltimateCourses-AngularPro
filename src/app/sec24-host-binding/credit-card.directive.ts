import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditCard]',
})
export class CreditCardDirective {
  @HostBinding('style.border') border = '';

  @HostListener('input', ['$event']) onKeyDown(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;

    let formattedValue = this.trimNumber(input.value);

    this.border = '';
    if (/[^\d]+/.test(formattedValue)) {
      this.border = '1px solid red';
    }

    formattedValue = this.formatNumber(formattedValue);
    input.value = formattedValue;
  }

  private trimNumber(value: string): string {
    let trimmed = value.replace(/\s+/g, '');

    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }

    return trimmed;
  }

  private formatNumber(value: string): string {
    const numbers: string[] = [];
    for (let i = 0; i < value.length; i += 4) {
      numbers.push(value.substr(i, 4));
    }

    return numbers.join(' ');
  }
}
