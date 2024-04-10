import { SharedEnvironment, WebsiteType } from '@sdk-ts/environment';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment: SharedEnvironment = {
  log(handler: () => void): void { handler() },
  production: false,
  quality: true,
  type: WebsiteType.Dedicated,
  enableERP: true,
  blog: {},
  dedicatedClientId: 'b-a26fe8bc-8278-4535-bc20-d225cad3ad8e',
  MenuMinWidth: 1440,
  languages: ['en', 'es', 'fr'],
  domain: {
    domain: 'domain.com',
    BaseURL: 'https://domain.com/',
    oneSignalAppId: 'oneSignalAppId',
    oneSignalDefaultTitle: 'oneSignalDefaultTitle:',
    localeString: 'en',
    datacenter: 'europe1',
  },
  getClientId(route) {
    return this.dedicatedClientId;
  },
  getClientIdFromPathname() {
    if (window.location.pathname.startsWith('/self')) {
      return 'self';
    } else {
      return this.getClientId(null);
    }
  },
  getPortalRoutePrefix(uuid: string) {
    return '/erp';
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
