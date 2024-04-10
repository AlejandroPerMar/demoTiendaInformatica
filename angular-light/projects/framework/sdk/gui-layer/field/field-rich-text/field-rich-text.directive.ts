import { ComponentRef, Directive, Input, ViewContainerRef } from '@angular/core';
import { AbstractEdmFieldWriteRichText } from '@sdk-edm/field-rich-text';

@Directive({
  selector: '[EdmFieldRichText]'
})
export class EdmGuiFieldRichTextDirective {

  @Input() field: AbstractEdmFieldWriteRichText;
  @Input() i18n?: string;
  @Input() nocolor?: boolean;

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    import('core.kiwixpro.com/field-rich-text').then(({ EdmGuiFieldRichTextModule }) => {
      const componentRef: ComponentRef<any> = this.viewContainerRef.createComponent(EdmGuiFieldRichTextModule.getComponent());
      componentRef.instance.field = this.field;
      componentRef.instance.i18n = this.i18n;
      componentRef.instance.nocolor = this.nocolor ? true : false;
      componentRef.changeDetectorRef.markForCheck();
    });
  }
}
