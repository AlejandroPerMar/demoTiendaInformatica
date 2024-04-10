import { ComponentRef, Directive, Input, ViewContainerRef } from '@angular/core';
import { AbstractEdmFieldWriteTime } from '@sdk-edm/field-time';

@Directive({
  selector: '[EdmFieldTime]'
})
export class EdmGuiFieldTimeDirective {

  @Input() field: AbstractEdmFieldWriteTime;

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    import('core.kiwixpro.com/field-time').then(({ EdmGuiFieldTimeModule }) => {
      const componentRef: ComponentRef<any> = this.viewContainerRef.createComponent(EdmGuiFieldTimeModule.getComponent());
      componentRef.instance.field = this.field;
      componentRef.changeDetectorRef.markForCheck();
    });
  }
}
