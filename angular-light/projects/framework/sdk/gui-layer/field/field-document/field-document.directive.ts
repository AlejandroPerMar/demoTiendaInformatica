import { ComponentRef, Directive, Input, ViewContainerRef } from '@angular/core';
import { AbstractEdmFieldWriteDocument } from '@sdk-edm/field-document';

@Directive({
  selector: '[EdmFieldDocument]'
})
export class EdmGuiFieldDocumentDirective {

  @Input() field: AbstractEdmFieldWriteDocument;
  @Input() i18n?: string;
  @Input() nodelete?: boolean = false;
  @Input() autoOpen?: boolean = false;

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    import('core.kiwixpro.com/field-document').then(({ EdmGuiFieldDocumentModule }) => {
      const componentRef: ComponentRef<any> = this.viewContainerRef.createComponent(EdmGuiFieldDocumentModule.getComponent());
      componentRef.instance.field = this.field;
      componentRef.instance.i18n = this.i18n;
      componentRef.instance.nodelete = this.nodelete;
      componentRef.instance.autoOpen = this.autoOpen;
      componentRef.changeDetectorRef.markForCheck();
    });
  }
}
