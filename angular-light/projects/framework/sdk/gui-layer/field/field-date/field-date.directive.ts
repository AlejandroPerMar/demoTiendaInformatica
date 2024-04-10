import { ComponentRef, Directive, Input, ViewContainerRef } from '@angular/core';
import { AbstractEdmFieldWriteDate } from '@sdk-edm/field-date';
import { BehaviorSubject } from 'rxjs';

@Directive({
  selector: '[EdmFieldDate]'
})
export class EdmGuiFieldDateDirective {

  @Input() field: AbstractEdmFieldWriteDate;
  @Input() disabled: boolean;
  @Input() minDate: BehaviorSubject<Date>;
  @Input() maxDate: BehaviorSubject<Date>;

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    import('core.kiwixpro.com/field-date').then(({ EdmGuiFieldDateModule }) => {
      const componentRef: ComponentRef<any> = this.viewContainerRef.createComponent(EdmGuiFieldDateModule.getComponent());
      componentRef.instance.field = this.field;
      componentRef.instance.disabled = this.disabled;
      componentRef.instance.minDate = this.minDate;
      componentRef.instance.maxDate = this.maxDate;
      componentRef.changeDetectorRef.markForCheck();
    });
  }
}
