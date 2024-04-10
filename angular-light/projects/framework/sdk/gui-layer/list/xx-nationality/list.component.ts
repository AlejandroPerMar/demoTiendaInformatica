import { ChangeDetectorRef, ComponentRef, Directive, Input, NgZone, OnInit, ViewContainerRef } from '@angular/core';
import { AbstractEdmFieldWriteList } from '@sdk-edm/field-list';
import { Controller, ControllerProvider } from '@sdk-ts/controller';
import { PromiseResolve } from '@sdk-ts/promise';

@Directive({
  selector: '[EdmListXxNationality]',
})
export class EdmListXxNationality implements OnInit {
  private static ready: Promise<void> = null;
  public static setReady(): Promise<void> {
    if (this.ready === null) {
      this.ready = ControllerProvider.instance.loadList('xx-nationality');
    }
    return this.ready;
  };
  @Input() field: AbstractEdmFieldWriteList;

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
    this.controller.createComponentList('xx-nationality', this.viewContainerRef).then((list) => {
      list.instance.field = this.field;
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

}
