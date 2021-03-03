import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  exportAs: 'tooltip', //  this allows us to get a template ref variable
})
export class TooltipDirective implements OnInit {
  tooltipElement = document.createElement('div');
  visible = false;

  @Input() set appTooltip(value: string) {
    this.tooltipElement.textContent = value;
  }

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.tooltipElement.className = 'tooltip';
    this.element.nativeElement.appendChild(this.tooltipElement);
    this.element.nativeElement.classList.add('tooltip-container');

    this.tooltipElement.classList.add('tooltip--active');
  }

  show(): void {
    this.tooltipElement.classList.add('tooltip--active');
  }

  hide(): void {
    this.tooltipElement.classList.remove('tooltip--active');
  }
}
