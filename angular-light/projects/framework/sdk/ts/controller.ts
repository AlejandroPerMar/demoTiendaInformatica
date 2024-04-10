import { HttpHeaders } from '@angular/common/http';
import { ComponentRef, ElementRef, EventEmitter, Injector, ViewContainerRef } from '@angular/core';
import { AbstractI18nFormat } from '@i18n/format.i18n';
import { AbstractI18nFramework } from '@i18n/framework.i18n';
import { AbstractCoreI18n, I18n, I18nLanguage } from '@i18n/i18n';
import { AbstractI18nLanguages } from '@i18n/languages.i18n';
import { AbstractI18nNavbarMenu } from '@i18n/navbar-menu.i18n';
import { AbstractEdmObjectReadCentralPublication } from '@sdk-datamodel-object/central-publication/central-publication.read.types';
import { AbstractEdmObjectReadCmsPage } from '@sdk-datamodel-object/cms-page/cms-page.read.types';
import { AbstractEdmFieldReadDocument } from '@sdk-edm/field-document';
import { SharedEnvironment } from '@sdk-ts/environment';
import { AbstractActorDeclaration, ObjectDeclaration } from '@sdk-ts/object-declaration';
import { PromiseResolve } from '@sdk-ts/promise';
import { AbstractDirectorySearchInstance } from '@sdk-ts/search-instance';
import { MdbSidenavComponent } from 'mdb-angular-ui-kit/sidenav';
import { BehaviorSubject } from 'rxjs';

export interface FormController {
  write: boolean;
  editable: boolean;
  canDelete: boolean;
  deleteIcon: string;
  deleteLabel: string;
  noToggleView: boolean;

  canAdd: boolean;
  addIcon: string;
  addLabel: string;
  canCancel: boolean;
  canCopy: boolean;

  withPreCustom1: boolean;
  preCustom1Icon: string;
  preCustom1Label: string;
  preCustom1Class: string;
  withPreCustom2: boolean;
  preCustom2Icon: string;
  preCustom2Label: string;
  preCustom2Class: string;

  withPostCustom1: boolean;
  postCustom1Icon: string;
  postCustom1Label: string;
  postCustom1Class: string;
  withPostCustom2: boolean;
  postCustom2Icon: string;
  postCustom2Label: string;
  postCustom2Class: string;

  toggleView: string;
  noToggleLayout: boolean;
  toggleLayout: string;

  timeout: EventEmitter<string>;
  edit: EventEmitter<string>;
  add: EventEmitter<string>;
  copy: EventEmitter<string>;
  delete: EventEmitter<string>;
  cancel: EventEmitter<string>;
  save: EventEmitter<string>;
  toggledView: EventEmitter<any>;
  toggledLayout: EventEmitter<any>;
  preCustom1: EventEmitter<string>;
  preCustom2: EventEmitter<string>;
  postCustom1: EventEmitter<string>;
  postCustom2: EventEmitter<string>;
}

export interface SecurityRole {
  clientid: AbstractActorDeclaration,
  actor: AbstractActorDeclaration,
  role: string,
}

export enum KiwiEventType {
  CalendarAppointment,
  ContactList,
  ContactInvitation,
  contactSecurity,
  Interface,
  TaskTodoList,
  Notification,
  MenuCounterUpdated,
}

export interface InterfaceDocumentEvent {
  docId?: string;
  docName?: string;
}
export interface InterfaceEvent {
  domain: string;
  env: string;
  instance: string;
  runid: string;
  status?: string;
  soVersion?: string;
  platformVersion?: string;
  progress_current?: number;
  data_error?: number;
  data_warning?: number;
  technical_error?: number;
  technical_warning?: number;
  completed?: string;
  documents: InterfaceDocumentEvent[];
}

export interface ListTaskTodoEvent {
  taskId: string;
  conctactId: string;
  actors: string[];
}

export interface InventoryItemEvent {
  clientid: string,
  warehouse: string;
  item: string;
  quantity?: string;
  alert?: string;
  notification?: boolean;
}
export interface InventoryItemEventSubscriber {
  onInventoryItemEvent(event: InventoryItemEvent): void;
}

export interface MenuItem {
  parent?: string;
  name: string;
  label: string;
  route: string;
  homepageRoute?: string;
  virtual: boolean;
  fullPath: boolean;
  submenus: MenuItem[];
  opened: boolean;
  counter: number;
}

export interface DedicatedMenuItem {
  name: string;
  label: string;
  route?: string;
  login?: boolean;
}

export interface Menu {
  root: MenuItem[];
  roles: string[];
  modules: string[];
}


export interface InterfaceInstance {
  env: string;
  id: string;
  start: boolean;
  settings: boolean;
  label: string;
  guiMaster: string;
  group: string;
}


export interface InterfaceGuiControllerVariable {
  value?: string,
  values?: string[],
}


export interface ListProvider {
  loadList(): Promise<void>;
  createComponentList(controller: Controller, content: ViewContainerRef): Promise<ComponentRef<any>>;

  loadMultiList(): Promise<void>;
  createComponentMultiList(controller: Controller, content: ViewContainerRef): Promise<ComponentRef<any>>;
}

export interface InterfaceGuiController {
  parameters: (controller: Controller, content: ViewContainerRef, instance: InterfaceInstance, variables: any, startEvent: BehaviorSubject<string>, reloacEvent: BehaviorSubject<any>, startInterface: (mode: string, vars: Map<string, InterfaceGuiControllerVariable>) => void) => Promise<void>;
  detail: (controller: Controller, content: ViewContainerRef, instance: InterfaceInstance, script: any) => Promise<void>;
  settings: (controller: Controller, content: ViewContainerRef, instance: InterfaceInstance, edit: boolean, settings: any[], saveEvent: BehaviorSubject<string>, saveSettings: (settings: any) => void) => Promise<void>;
}


export interface I18nSubscriber {
  onI18nChanged(): void;
}

export interface InfiniteScrollEventSubscriber {
  infiniteScrollCompleted(): void;
}

export enum CustomModule {
  Blog = 1,
}
export enum CustomComponent {
  Toolbar = 1,
  BlogBanner = 2,
  BlogPosts = 3,
  BlogPostsCard = 4,
  BlogPost = 5,
  BlogFooter = 6,
}

export interface CustomComponentParam {
  view: ViewContainerRef
}

export interface CustomComponentBlogPostsParam extends CustomComponentParam {
  publications: AbstractEdmObjectReadCentralPublication[];
  openPost: (publication: AbstractEdmObjectReadCentralPublication) => void;
}

export interface CustomComponentBlogPostsCardParam extends CustomComponentParam {
  uuid: string;
  publication: AbstractEdmObjectReadCentralPublication;
}

export interface CustomComponentBlogPostParam extends CustomComponentParam {
  uuid: string;
  publication: AbstractEdmObjectReadCentralPublication;
  inlined: boolean;
}


export class ControllerProvider {
  private static get _resolveInstance(): () => void {
    if (!__as2_async_controller__) {
      __as2_async_controller__ = new Promise<Controller>((resolve: PromiseResolve<Controller>): void => {
        __as2_resolve_controller__ = () => {
          resolve(__as2_controller__);
        };
      });
    }
    return __as2_resolve_controller__;
  }
  public static get instance(): Controller {
    return __as2_controller__;
  }
  public static set instance(instance: Controller) {
    if (!__as2_controller__) {
      __as2_controller__ = instance;
      if (!__as2_async_controller__) {
        __as2_async_controller__ = new Promise<Controller>((resolve: PromiseResolve<Controller>): void => {
          __as2_resolve_controller__ = () => {
            resolve(__as2_controller__);
          };
        });
      }
      this._resolveInstance();
    }
  }
  public static get asyncInstance(): Promise<Controller> {
    if (!__as2_async_controller__) {
      __as2_async_controller__ = new Promise<Controller>((resolve: PromiseResolve<Controller>): void => {
        __as2_resolve_controller__ = () => {
          resolve(__as2_controller__);
        };
      });
    }
    return __as2_async_controller__;
  }
}

export interface MenuRoles {
  clientId: string;
  roles: Set<string>;
}

export interface MenuModules {
  clientId: string;
  modules: Set<string>;
}

export interface DatacenterProvider {
  datacenter: string;
}

export interface Controller {

  get developmentBackend(): boolean;
  get productionBackend(): boolean;

  __enbl_register_user__: boolean;
  __enbl_register_business__: boolean;
  __enbl_login__: boolean;
  centralDatacenter: DatacenterProvider;

  _100vh: number;

  ROUTING_ERROR_NONE: null;
  ROUTING_ERROR_UNAUTHORIZED: '401';
  ROUTING_ERROR_NOT_FOUND: '404';
  ROUTING_ERROR_INTERNAL_SERVER_ERROR: '500';
  ROUTING_ERROR_UNKNOWN_UUID: 'unknow-uuid';
  ROUTING_ERROR_MAINTENANCE: 'maintenance';
  ROUTING_ERROR_MODULE_NOT_AVAILABLE: 'module-not-available';
  ROUTING_ERROR_MODULE_INTERRUPTED: 'module-interrupted'
  ROUTING_ERROR_SESSION_EXPIRED: 'expired';
  get error(): null | '401' | '404' | '500' | 'unknow-uuid' | 'maintenance' | 'module-not-available' | 'module-interrupted' | 'expired';
  set error(error: null | '401' | '404' | '500' | 'unknow-uuid' | 'maintenance' | 'module-not-available' | 'module-interrupted' | 'expired');
  resetError(): void;

  loadList(name: string): Promise<void>;
  createComponentList(name: string, content: ViewContainerRef): Promise<ComponentRef<any>>;
  loadMultiList(name: string): Promise<void>;
  createComponentMultiList(name: string, content: ViewContainerRef): Promise<ComponentRef<any>>;

  registerOnResize(handler: () => void): void;
  unregisterOnResize(handler: () => void): void;

  get wasBackButtonPressed(): boolean;
  set wasBackButtonPressed(wasBackButtonPressed: boolean);

  topScrollContainer: ElementRef;
  topScrollContainerReady: Promise<void>;
  resolveTopScrollContainer: () => void;
  get topContainerHeight(): number;
  get operationInProgress(): boolean;
  set operationInProgress(operationInProgress: boolean);
  get componentLoading(): boolean;
  set componentLoading(componentLoading: boolean);

  injector: Injector;
  triggerTopScrollContainer(onComplete?: () => void): void;
  modalZIndex(root: ElementRef): void;

  syncReady: boolean;
  ready: Promise<void>;
  environment: SharedEnvironment;
  showSubscribeLink: BehaviorSubject<boolean>;

  securedDocAccess: string;
  domainBaseURL(): string;
  endpoint(datacenter?: DatacenterProvider): string;
  websocket(): string;
  wwwEntryPoint(): string;

  i18nFramework: AbstractI18nFramework;
  i18nFormat: AbstractI18nFormat;
  i18nNavbarMenu: AbstractI18nNavbarMenu;
  i18nLanguages: AbstractI18nLanguages;

  clientDeclaration: AbstractActorDeclaration;
  siteClientDeclaration: AbstractActorDeclaration;
  get clientId(): string;
  set clientId(clientId: string);

  get withPortalBanner(): boolean;
  set withPortalBanner(withPortalBanner: boolean);
  updateFormController: BehaviorSubject<FormController>;

  toggleUserMenu: () => void;
  userDeclaration: AbstractActorDeclaration;
  get userId(): string;
  set userId(userId: string);
  onContactTabChanged: () => void;
  get contactActiveTab(): 'contacts' | 'requests';
  set contactActiveTab(activeTab: 'contacts' | 'requests');

  jailedSelfMenu: boolean;
  coreMenu: MenuItem[];
  dedicatedMenu: DedicatedMenuItem[];
  dedicatedI18nNavbarMenu: AbstractCoreI18n<any>;
  menuRoles: BehaviorSubject<MenuRoles>;
  menuModules: BehaviorSubject<MenuModules>;
  activeMenuItem: BehaviorSubject<[boolean, string]>;
  get rootAdmin(): boolean;


  getDirectorySearchInstance(): AbstractDirectorySearchInstance;
  get actorDeclarationCentral(): AbstractActorDeclaration;

  get navigationMenu(): MdbSidenavComponent;
  updateNavigationMenuMode(mode: 'auto' | 'over'): void;
  toggleNavigationMenu(): void;

  setActiveMenuItem(core: boolean, menu: string, submenu?: string): void;
  isMenuItemActive(core: boolean, code: string): boolean;
  get dedicatedPublicActivated(): boolean;
  set dedicatedPublicActivated(dedicatedPublicActivated: boolean);
  coreMenuOnOpen(item: MenuItem): void;
  dedicatedMenuOnOpen(item: DedicatedMenuItem): void;

  setCustomModuleInitializer(module: CustomModule, initializer: () => Promise<void>): void;
  getCustomModuleInitializer(module: CustomModule): () => Promise<void>;
  deleteCustomModuleInitializer(module: CustomModule): void;
  getCustomComponentContainer(component: CustomComponent): BehaviorSubject<CustomComponentParam>;
  CustomComponentState: Map<CustomComponent, boolean>;

  infiniteScrollCompleted(): void;
  registerInfiniteScrollEventSubscriber(subscriber: InfiniteScrollEventSubscriber): void;
  unregisterInfiniteScrollEventSubscriber(subscriber: InfiniteScrollEventSubscriber): void;

  registerInventoryItemEventSubscriber(subscriber: InventoryItemEventSubscriber): void;
  unregisterInventoryItemEventSubscriber(subscriber: InventoryItemEventSubscriber): void;

  loadMenuContent(menu: Menu): void;

  onBannerUpdated: BehaviorSubject<any>;
  onPwaUpdated: BehaviorSubject<any>;
  onOperationInProgressUpdated: BehaviorSubject<any>;
  onComponentLoadingUpdated: BehaviorSubject<any>;
  onErrorUpdated: BehaviorSubject<any>;
  onMenuUpdated: BehaviorSubject<any>;

  toggleLanguageSelector: () => void;
  get langu(): I18nLanguage;
  set langu(langu: I18nLanguage);
  i18nSubscribe(subscriber: I18nSubscriber): void;
  i18nUnsubscribe(subscriber: I18nSubscriber): void;
  i18nRegisterSource(source: AbstractCoreI18n<any>): void;

  httpHeaders(): HttpHeaders;
  httpGet<T>(url: string, responseType?: XMLHttpRequestResponseType, noAutoProcess?: boolean): Promise<T>;
  httpPost<T>(url: string, body: any, responseType?: XMLHttpRequestResponseType, noAutoProcess?: boolean): Promise<T>;
  httpPut<T>(url: string, body: any, responseType?: XMLHttpRequestResponseType, noAutoProcess?: boolean): Promise<T>;
  httpDelete<T>(url: string, body?: any, responseType?: XMLHttpRequestResponseType, noAutoProcess?: boolean): Promise<T>;
  httpProcessError(e: any): boolean;
  pageStatsAndHeaders(pageId: string, doNotSetHeaders?: boolean): [() => void, Promise<AbstractEdmObjectReadCmsPage>];

  purgeObject(type: string, objectId: string): void;
  getObjectDeclaration<T extends ObjectDeclaration>(type: string, id: string): T;
  getObject<T>(type: string, id: string): T;
  createObject<T>(type: string, initializer?: (payload: any) => any): Promise<T>;
  registerObjectUpdateHandler(type: string, objectId: string, handler: () => void): void;
  unregisterObjectUpdateHandler(type: string, objectId: string, handler: () => void): void;
  registerBufferedObjectUpdateHandler(type: string, objectId: string, handler: () => void): void;
  unregisterBufferedObjectUpdateHandler(type: string, objectId: string, handler: () => void): void;
  registerNewTransferHandler(type: 'received' | 'sent', warehouse: string, handler: (transferId: string) => void): void;
  unregisterNewTransferHandler(type: 'received' | 'sent', warehouse: string, handler: (transferId: string) => void): void;

  events(type: KiwiEventType): BehaviorSubject<any>;

  popupDuration: number;
  popupErrorEdmSave: () => void;
  popupErrorInForm: () => void;
  popupErrorInternalServerError: () => void;
  popupErrorLock: () => void;
  popupErrorNotFound: () => void;
  popupErrorUnauthorized: () => void;
  popupSuccessEdmSave: () => void;
  popupSuccessGeneral: () => void;
  popupCopyToClipboard: () => void;

  login: (noRegister?: boolean) => void;
  register: () => void;
  logout(): void;
  interfaceLogin: () => void;
  interfaceLogout(): void;
  toggleRightMenuPanel: (rightMenuPanel: 'contacts' | 'notifications') => void;

  interfacePgpAvailable: boolean;
  interfaceUsers: string[];
  interfaceEnvironments: string[];
  interfaceInstancesLabel: Map<string, string>;
  get futureInterfaceAllowedInstances(): Promise<InterfaceInstance[]>;
  futureInterfaceGuiControllers: Promise<Map<string, InterfaceGuiController>>;
  interfaceGuiGroups: I18n<any>;
  interfaceGuiControllersResolver: (mapped: Map<string, InterfaceGuiController>, groups: I18n<any>) => void;

  fileExtensions: any;
  isDocumentImage(document: AbstractEdmFieldReadDocument): boolean;
  getFileTypeImage(extension: string): string;
  imagePlaceholder(width: number, height: number): string;
}
