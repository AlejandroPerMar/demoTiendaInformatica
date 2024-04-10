import { ChangeDetectorRef, ComponentRef, Directive, EventEmitter, Input, Output, ViewContainerRef } from '@angular/core';
import { AbstractEdmFieldWriteObject } from '@sdk-edm/field-object';
import { DirectoryObject } from '@sdk-ts/object';
import { AbstractActorDeclaration } from '@sdk-ts/object-declaration';
import { AbstractDirectorySearchInstance } from '@sdk-ts/search-instance';

@Directive({
  selector: '[EdmFieldObject]'
})
export class EdmGuiFieldObjectDirective {
  @Output() valueChanged = new EventEmitter<void>();

  @Input() client: AbstractActorDeclaration;
  @Input() field: AbstractEdmFieldWriteObject<any, any>;
  @Input() i18n?: string;
  @Input() directorySearch: (directory: AbstractDirectorySearchInstance, pattern: string, changeDetectorRef: ChangeDetectorRef) => void;
  @Input() directoryOverview: (directory: AbstractDirectorySearchInstance, changeDetectorRef: ChangeDetectorRef) => void;
  @Input() avatarUrl: (hit: DirectoryObject) => string;
  @Input() label: (object: any) => string;
  @Input() disabled: boolean;
  @Input() createNewObject: () => void;

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    import('core.kiwixpro.com/field-object').then(({ EdmGuiFieldObjectModule }) => {
      const componentRef: ComponentRef<any> = this.viewContainerRef.createComponent(EdmGuiFieldObjectModule.getComponent());
      componentRef.instance.field = this.field;
      componentRef.instance.client = this.client;
      componentRef.instance.i18n = this.i18n;
      componentRef.instance.directorySearch = this.directorySearch;
      componentRef.instance.directoryOverview = this.directoryOverview;
      componentRef.instance.avatarUrl = this.avatarUrl;
      componentRef.instance.label = this.label;
      componentRef.instance.disabled = this.disabled;
      componentRef.instance.createNewObject = this.createNewObject;
      componentRef.changeDetectorRef.markForCheck();
    });
  }
}
