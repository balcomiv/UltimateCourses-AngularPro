import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyFor][appMyForOf]]',
})
export class MyForDirective {
  @Input() set appMyForOf(collection: unknown[]) {
    this.view.clear(); //  The real ngFor would clear only the nodes that changed

    collection.forEach((item, index) => {
      this.view.createEmbeddedView(this.template, {
        $implicit: item,
        index, //  shorthand for index: index
      });
    });
  }

  constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<unknown>
  ) {}
}
