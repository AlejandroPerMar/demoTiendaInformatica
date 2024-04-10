import { InjectionToken, ViewContainerRef } from '@angular/core';
import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { I18nLanguage } from '@i18n/i18n';
import { Errors } from '@sdk-ts/errors';

import { Controller, DatacenterProvider } from './controller';

export interface SharedDomain extends DatacenterProvider {
  domain: string;
  BaseURL: string;
  oneSignalAppId: string;
  oneSignalDefaultTitle: string;
  localeString: I18nLanguage;
  datacenter: string;
  privateHosting?: boolean;
}
export enum WebsiteType {
  Portal = 1,
  Dedicated = 2,
  Interface = 3,
  CashRegister = 4,
  SingleClient = 5,
}
export interface BlogSettings {
  hideTimestamp?: boolean;
}
export interface SharedEnvironment {
  log(handler: () => void): void;
  production: boolean;
  quality?: boolean;
  type: WebsiteType;
  enableERP?: boolean;
  blog?: BlogSettings;
  defaultNavigationMenuMode?: 'over' | 'auto';
  darkTheme?: boolean;
  loginDisabled?: boolean;
  dedicatedClientId?: string;
  MenuMinWidth: number;
  languages: I18nLanguage[];
  domain: SharedDomain;
  getClientId(route: ActivatedRouteSnapshot): string;
  getClientIdFromPathname(): string;
  getPortalRoutePrefix(uuid: string): string;
  customErrors?: Errors;
}

export interface InterfaceInstances {
  instances: string[];
  mapped: Map<string, (controller: Controller, content: ViewContainerRef) => Promise<void>>;
}

export const SHARED_ENVIRONMENT = new InjectionToken<SharedEnvironment>("SHARED_ENVIRONMENT");
export const SHARED_CUSTOM_ROUTES = new InjectionToken<Routes>("SHARED_CUSTOM_ROUTES");
export const SHARED_DEFAULT_ROUTES = new InjectionToken<Routes>("SHARED_DEFAULT_ROUTES");
