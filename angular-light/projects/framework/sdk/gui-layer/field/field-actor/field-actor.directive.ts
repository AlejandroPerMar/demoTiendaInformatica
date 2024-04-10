import { ChangeDetectorRef, ComponentRef, Directive, Input, ViewContainerRef } from '@angular/core';
import { AbstractEdmFieldWriteActor } from '@sdk-edm/field-actor';
import { AbstractDirectorySearchInstance } from '@sdk-ts/search-instance';

@Directive({
  selector: '[EdmFieldActor]'
})
export class EdmGuiFieldActorDirective {

  @Input() field: AbstractEdmFieldWriteActor;
  @Input() i18n?: string;
  @Input() onDelete?: (actor: AbstractEdmFieldWriteActor) => void;
  @Input() directorySearch: (directory: AbstractDirectorySearchInstance, pattern: string, changeDetectorRef: ChangeDetectorRef) => void;

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    import('core.kiwixpro.com/field-actor').then(({ EdmGuiFieldActorModule }) => {
      const componentRef: ComponentRef<any> = this.viewContainerRef.createComponent(EdmGuiFieldActorModule.getComponent());
      componentRef.instance.field = this.field;
      componentRef.instance.i18n = this.i18n;
      componentRef.instance.onDelete = this.onDelete;
      componentRef.instance.directorySearch = this.directorySearch;
      componentRef.changeDetectorRef.markForCheck();
    });
  }
}
