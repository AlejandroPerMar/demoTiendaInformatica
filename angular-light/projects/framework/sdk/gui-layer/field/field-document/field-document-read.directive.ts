import { ComponentRef, Directive, ElementRef, Input, ViewContainerRef } from '@angular/core';
import { AbstractEdmFieldReadDocument } from '@sdk-edm/field-document';

@Directive({
  selector: '[EdmFieldDocumentRead]'
})
export class EdmGuiFieldDocumentReadDirective {

  @Input() field: AbstractEdmFieldReadDocument;
  @Input() previewImg?: boolean;

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    import('core.kiwixpro.com/field-document').then(({ EdmGuiFieldDocumentModule }) => {
      const componentRef: ComponentRef<any> = this.viewContainerRef.createComponent(EdmGuiFieldDocumentModule.getComponentRead());
      componentRef.instance.field = this.field;
      componentRef.instance.previewImg = this.previewImg;
      (componentRef.instance.root as ElementRef).nativeElement.classList.add('w-100');
      componentRef.changeDetectorRef.markForCheck();
    });
  }
}
