import { ChangeDetectorRef, ComponentRef, Directive, Input, NgZone, OnInit, SimpleChanges, ViewContainerRef } from '@angular/core';
import { AbstractEdmFieldWriteList } from '@sdk-edm/field-list';
import { Controller, ControllerProvider } from '@sdk-ts/controller';
import { PromiseResolve } from '@sdk-ts/promise';

@Directive({
  selector: '[EdmListXxGovernmentIdType]',
})
export class EdmListXxGovernmentIdType implements OnInit {
  private static ready: Promise<void> = null;
  public static setReady(): Promise<void> {
    if (this.ready === null) {
      this.ready = ControllerProvider.instance.loadList('xx-government-id-type');
    }
    return this.ready;
  };
  @Input() field: AbstractEdmFieldWriteList;
  @Input() country: string;

  private controller: Controller;
  public list: Promise<ComponentRef<any>>;
  public resolveList: (list: ComponentRef<any>) => void;
  public constructor(private viewContainerRef: ViewContainerRef, private changeDetectorRef: ChangeDetectorRef) {
    this.controller = ControllerProvider.instance;
    this.list = new Promise((resolve: PromiseResolve<ComponentRef<any>>): void => {
      this.resolveList = (list: ComponentRef<any>) => {
        resolve(list);
      };
    });
  }

  ngOnInit(): void {
    this.controller.createComponentList('xx-government-id-type', this.viewContainerRef).then((list) => {
      list.instance.field = this.field;
      list.instance.country = this.country;
      this.resolveList(list);
      this.controller.injector.get(NgZone).runOutsideAngular(() => {
        setTimeout(() => {
          this.controller.injector.get(NgZone).run(() => {
            list.instance.refresh();
            this.changeDetectorRef.markForCheck();
          });
        });
      });
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.field.control) {
      if (changes.country && this.list && changes.country.currentValue !== changes.country.previousValue) {
        if (changes.country.previousValue) {
          this.field.control.setValue('');
        }
        this.country = changes.country.currentValue;
        this.list.then((list) => {
          list.instance.country = this.country;
          list.instance.refresh();
          this.changeDetectorRef.markForCheck();
        });
        return;
      }
    }
  }

}
