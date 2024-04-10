import { APP_BASE_HREF, DatePipe, DOCUMENT, LocationStrategy, PathLocationStrategy, ViewportScroller } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EnvironmentProviders, ErrorHandler, Injectable, ModuleWithProviders, NgZone, Provider, Type, ɵɵinject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { CustomReuseStrategy } from '@sdk-routing/custom-reuse-strategy';
import { InnerViewPortScroller } from '@sdk-routing/inner-viewport-scroller';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';

import { PortalImportModule } from '../../../portal-import.module';

declare var __as2_base_href__: string;

export function kiwiDeclarations(): (any[] | Type<any>)[] {
  return [
  ]
}

export function kiwiImports(): (any[] | Type<any> | ModuleWithProviders<{}>)[] {
  return [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,

    HammerModule,

    MdbModalModule,
    PortalImportModule,

    RouterModule.forRoot([{
      path: '**',
      loadChildren: () => import('@blank/blank.module').then(m => m.AppBlankModule)
    }, {
      path: '',
      loadChildren: () => import('@blank/blank.module').then(m => m.AppBlankModule)
    }], {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ];
}


@Injectable()
export class CustomPathLocationStrategy extends PathLocationStrategy {
  public override prepareExternalUrl(internal: string): string {
    let retVal = super.prepareExternalUrl(internal);
    if (retVal.startsWith(__as2_base_href__) === true) {
      retVal = window.location.origin + '/' + retVal.substring(__as2_base_href__.length);
    }
    return retVal;
  }
}

export function kiwiProviders(): (Provider | EnvironmentProviders)[] {
  return [
    DatePipe,
    { provide: ViewportScroller, useFactory: () => { return new InnerViewPortScroller('topScrollContainer', ɵɵinject(DOCUMENT), window, ɵɵinject(ErrorHandler), ɵɵinject(NgZone)) } },
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy },
    { provide: APP_BASE_HREF, useValue: __as2_base_href__ },
    { provide: LocationStrategy, useClass: CustomPathLocationStrategy }
  ];
}
