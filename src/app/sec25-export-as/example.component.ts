import {
  AfterContentInit,
  Component,
  ContentChild,
  OnInit,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <!-- <label appTooltip="3 digits, back of your card" #myTooltip="tooltip">
      Enter your security code
      <span (mouseover)="myTooltip.show()" (mouseout)="myTooltip.hide()">
        (?)
      </span>
      <input type="text" />
    </label>
    <div>Test Test</div> -->

    <ng-container *ngTemplateOutlet="layoutTemplate"></ng-container>
  `,
  styleUrls: ['./example.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ExampleComponent implements OnInit, AfterContentInit {
  //  @Input() exampleRef: TemplateRef<unknown> | null = null;

  @ContentChild(TemplateRef) layoutTemplate: TemplateRef<any> | null = null;

  // @Input() layoutTemplate: TemplateRef<any> | null = null;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    console.log('layoutTemplate: ', this.layoutTemplate);
  }
}
