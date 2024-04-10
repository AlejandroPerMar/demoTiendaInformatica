import { ComponentRef, Directive, Input, ViewContainerRef } from '@angular/core';
import { AbstractEdmFieldWriteExternalUrl } from '@sdk-edm/field-external-url';

@Directive({
  selector: '[EdmFieldExternalUrl]'
})
export class EdmGuiFieldExternalUrlDirective {

  @Input() field: AbstractEdmFieldWriteExternalUrl;
  @Input() i18n?: string;

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    import('core.kiwixpro.com/field-external-url').then(({ EdmGuiFieldExternalUrlModule }) => {
      const componentRef: ComponentRef<any> = this.viewContainerRef.createComponent(EdmGuiFieldExternalUrlModule.getComponent());
      componentRef.instance.field = this.field;
      componentRef.instance.i18n = this.i18n;
      componentRef.changeDetectorRef.markForCheck();
    });
  }

}
