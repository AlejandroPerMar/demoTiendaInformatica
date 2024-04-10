import { SharedEnvironment, WebsiteType } from '@sdk-ts/environment';

export const environment: SharedEnvironment = {
  log(handler: () => void): void { },
  production: true,
  type: WebsiteType.Dedicated,
  dedicatedClientId: '<dedicatedClientId>',
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
