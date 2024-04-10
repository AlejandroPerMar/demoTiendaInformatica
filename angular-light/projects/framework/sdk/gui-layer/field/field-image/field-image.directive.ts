import { ComponentRef, Directive, Input, ViewContainerRef } from '@angular/core';
import { AbstractEdmFieldWriteImage } from '@sdk-edm/field-image';

@Directive({
  selector: '[EdmFieldImage]'
})
export class EdmGuiFieldImageDirective {

  @Input() field: AbstractEdmFieldWriteImage;
  @Input() previewWidth: number;
  @Input() previewHeight: number;
  @Input() imageWidth: number;
  @Input() imageHeight: number;
  @Input() circle: boolean;
  @Input() emptySrc?: string;
  @Input() defaultImage?: AbstractEdmFieldWriteImage;
  @Input() nodelete?: boolean = false;
  @Input() autoOpen?: boolean = false;

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    import('core.kiwixpro.com/field-image').then(({ EdmGuiFieldImageModule }) => {
      const componentRef: ComponentRef<any> = this.viewContainerRef.createComponent(EdmGuiFieldImageModule.getComponent());
      componentRef.instance.field = this.field;
      componentRef.instance.previewWidth = this.previewWidth;
      componentRef.instance.previewHeight = this.previewHeight;
      componentRef.instance.imageWidth = this.imageWidth;
      componentRef.instance.imageHeight = this.imageHeight;
      componentRef.instance.circle = this.circle;
      componentRef.instance.emptySrc = this.emptySrc;
      componentRef.instance.defaultImage = this.defaultImage;
      componentRef.instance.nodelete = this.nodelete;
      componentRef.instance.autoOpen = this.autoOpen;
      componentRef.changeDetectorRef.markForCheck();
    });
  }
}
