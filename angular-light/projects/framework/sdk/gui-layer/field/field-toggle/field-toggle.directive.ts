import { ComponentRef, Directive, Input, ViewContainerRef } from '@angular/core';
import { AbstractEdmFieldWriteBoolean } from '@sdk-edm/field-boolean';

@Directive({
  selector: '[EdmFieldToggle]'
})
export class EdmGuiFieldToggleDirective {

  @Input() field: AbstractEdmFieldWriteBoolean;

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    import('core.kiwixpro.com/field-toggle').then(({ EdmGuiFieldToggleModule }) => {
      const componentRef: ComponentRef<any> = this.viewContainerRef.createComponent(EdmGuiFieldToggleModule.getComponent());
      componentRef.instance.field = this.field;
      componentRef.changeDetectorRef.markForCheck();
    });
  }
}
