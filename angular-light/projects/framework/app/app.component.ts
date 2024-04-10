import { Component, ComponentRef, Inject, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Controller } from '@sdk-ts/controller';
import { SHARED_CUSTOM_ROUTES, SHARED_DEFAULT_ROUTES, SHARED_ENVIRONMENT, SharedEnvironment, WebsiteType } from '@sdk-ts/environment';

declare var __as2_interface_dc__: string;

@Component({
  template: ''
})
export abstract class AbstractAppComponent {
  @ViewChild('ERP', { read: ViewContainerRef, static: false }) set ERP(content: ViewContainerRef) {
    if (content && content.length === 0) {
      import('core.kiwixpro.com/main').then(({ ErpMainModule }) => {
        let erp: ComponentRef<any> = null;
        switch (this.environment.type) {
          case WebsiteType.Portal:
            erp = content.createComponent(ErpMainModule.getComponentForPortal(this.environment, this.customRoutes, this.defaultRoutes));
            break;
          case WebsiteType.Dedicated:
            erp = content.createComponent(ErpMainModule.getComponentForDedicated(this.environment, this.customRoutes, this.defaultRoutes));
            break;
          case WebsiteType.Interface:
            this.environment.domain.datacenter = __as2_interface_dc__;
            erp = content.createComponent(ErpMainModule.getComponentForInterface(this.environment));
            break;
          case WebsiteType.CashRegister:
            erp = content.createComponent(ErpMainModule.getComponentForCashRegister(this.environment));
            break;
          case WebsiteType.SingleClient:
            erp = content.createComponent(ErpMainModule.getComponentForSingleClient(this.environment));
            break;
        }
        erp.instance.controller.ready.then(() => {
          this.kiwiInit(erp.instance.controller);
          erp.changeDetectorRef.markForCheck();

          const url: URL = new URL(document.location.href);
          const queryParams: any = {};
          url.searchParams.forEach((value, key) => {
            queryParams[key] = value;
          });
          let navigate: () => void = () => {
            this.router.navigate([url.pathname], { queryParams }).then((value) => {
              if (value !== true) {
                this.router.resetConfig(this.router.config);
                navigate();
              }
            });
          };
          navigate();
        });
      });
    }
  }

  public constructor(private router: Router, @Inject(SHARED_ENVIRONMENT) private environment: SharedEnvironment, @Inject(SHARED_CUSTOM_ROUTES) private customRoutes: Routes, @Inject(SHARED_DEFAULT_ROUTES) private defaultRoutes: Routes, protected injector: Injector) {
  }

  public kiwiInit(controller: Controller): void {
  }
}
