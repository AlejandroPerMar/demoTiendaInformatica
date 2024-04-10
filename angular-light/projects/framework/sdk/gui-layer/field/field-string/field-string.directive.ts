import { ComponentRef, Directive, EventEmitter, Input, Output, ViewContainerRef } from '@angular/core';
import { AbstractEdmFieldWriteString } from '@sdk-edm/field-string';

@Directive({
  selector: '[EdmFieldString]'
})
export class EdmGuiFieldStringDirective {

  @Input() field: AbstractEdmFieldWriteString;
  @Input() i18n?: string;
  @Input() disabled: boolean;
  @Input() withDelete?: boolean;
  @Output() onDelete = new EventEmitter<string>();

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    import('core.kiwixpro.com/field-string').then(({ EdmGuiFieldStringModule }) => {
      const componentRef: ComponentRef<any> = this.viewContainerRef.createComponent(EdmGuiFieldStringModule.getComponent());
      componentRef.instance.field = this.field;
      componentRef.instance.i18n = this.i18n;
      componentRef.instance.disabled = this.disabled;
      if (this.withDelete === true) {
        componentRef.instance.onDelete = this.onDelete;
      }
      componentRef.changeDetectorRef.markForCheck();
    });
  }
}
