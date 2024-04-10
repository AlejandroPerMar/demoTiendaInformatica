import { ComponentRef, Directive, Input, ViewContainerRef } from '@angular/core';
import { AbstractEdmFieldWriteYoutube } from '@sdk-edm/field-youtube';

@Directive({
  selector: '[EdmFieldYoutube]'
})
export class EdmGuiFieldYoutubeDirective {

  @Input() field: AbstractEdmFieldWriteYoutube;
  @Input() i18n?: string;

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    import('core.kiwixpro.com/field-youtube').then(({ EdmGuiFieldYoutubeModule }) => {
      const componentRef: ComponentRef<any> = this.viewContainerRef.createComponent(EdmGuiFieldYoutubeModule.getComponent());
      componentRef.instance.field = this.field;
      componentRef.instance.i18n = this.i18n;
      componentRef.changeDetectorRef.markForCheck();
    });
  }

}
