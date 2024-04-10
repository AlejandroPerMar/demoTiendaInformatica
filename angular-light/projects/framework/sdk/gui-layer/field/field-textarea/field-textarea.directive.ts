import { ComponentRef, Directive, Input, ViewContainerRef } from '@angular/core';
import { AbstractEdmFieldWriteMultiLineString } from '@sdk-edm/field-multi-line-string';

@Directive({
  selector: '[EdmFieldTextarea]'
})
export class EdmGuiFieldTextareaDirective {

  @Input() field: AbstractEdmFieldWriteMultiLineString;
  @Input() i18n?: string;
  @Input() rows?: number = 5;

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    import('core.kiwixpro.com/field-textarea').then(({ EdmGuiFieldTextareaModule }) => {
      const componentRef: ComponentRef<any> = this.viewContainerRef.createComponent(EdmGuiFieldTextareaModule.getComponent());
      componentRef.instance.field = this.field;
      componentRef.instance.i18n = this.i18n;
      if (this.rows) {
        componentRef.instance.rows = this.rows;
      }
      componentRef.changeDetectorRef.markForCheck();
    });
  }
}
