import { ComponentRef, Directive, Input, ViewContainerRef } from '@angular/core';
import { AbstractEdmFieldWriteDecimal } from '@sdk-edm/field-decimal';

@Directive({
  selector: '[EdmFieldDecimal]'
})
export class EdmGuiFieldDecimalDirective {

  @Input() field: AbstractEdmFieldWriteDecimal;
  @Input() labelSuffix?: string;
  @Input() i18n?: string;

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    import('core.kiwixpro.com/field-decimal').then(({ EdmGuiFieldDecimalModule }) => {
      const componentRef: ComponentRef<any> = this.viewContainerRef.createComponent(EdmGuiFieldDecimalModule.getComponent());
      componentRef.instance.field = this.field;
      componentRef.instance.labelSuffix = this.labelSuffix;
      componentRef.instance.i18n = this.i18n;
      componentRef.changeDetectorRef.markForCheck();
    });
  }
}
