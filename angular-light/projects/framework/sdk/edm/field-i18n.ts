import { I18nLanguage } from '@i18n/i18n';
import { Controller, I18nSubscriber } from '@sdk-ts/controller';

import { AbstractEdmAbstractField, AbstractEdmFieldRead, AbstractEdmFieldWrite } from './field';
import { AbstractEdmFieldReadArray, AbstractEdmFieldWriteArray } from './field-array';

export interface AbstractI18nNull<T> {
  de: T;
  en: T;
  es: T;
  fr: T;
  it: T;
  pt: T;
  ru: T;
  th: T;
  tl: T;
  zh: T;
}

export interface AbstractEdmFieldI18n<T extends AbstractEdmFieldRead<any, any> | AbstractEdmFieldWrite<any> | AbstractEdmFieldReadArray<any> | AbstractEdmFieldWriteArray<any>> extends AbstractEdmAbstractField, I18nSubscriber {
  controller: Controller;
  de: T;
  en: T;
  es: T;
  fr: T;
  it: T;
  pt: T;
  ru: T;
  th: T;
  tl: T;
  zh: T;
  _: T;
  get allLanguages(): T[];
}

export interface AbstractEdmFieldReadI18n<T extends AbstractEdmFieldRead<any, any> | AbstractEdmFieldReadArray<any>> extends AbstractEdmFieldI18n<T> {
  load(): void;
}

export interface AbstractEdmFieldWriteI18n<T extends AbstractEdmFieldWrite<any> | AbstractEdmFieldWriteArray<any>> extends AbstractEdmFieldI18n<T> {
  get valid(): boolean;
  isValid(langu: I18nLanguage): boolean;
  get(langu: string): T;
  getEdmUpdatePayload(): any;
}
