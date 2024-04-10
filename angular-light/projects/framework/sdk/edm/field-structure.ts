import { I18nLanguage } from '@i18n/i18n';
import { Controller } from '@sdk-ts/controller';

import { AbstractEdmAbstractField } from './field';

export interface AbstractEdmFieldAbstractStructureData {
  release(): void;
  isNullOrEmpty(): boolean;
}

export interface AbstractEdmFieldReadStructureData extends AbstractEdmFieldAbstractStructureData {
  controller: Controller;
  load(): void;
};

export interface AbstractEdmFieldWriteStructureData extends AbstractEdmFieldAbstractStructureData {
  controller: Controller;
  createFormControl(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;
  isValid(langu: I18nLanguage): boolean;
};

export interface AbstractEdmFieldAbstractStructure<T extends AbstractEdmFieldReadStructureData | AbstractEdmFieldWriteStructureData> extends AbstractEdmAbstractField {
  rows: T[];
}

export interface AbstractEdmFieldReadStructure<T extends AbstractEdmFieldReadStructureData> extends AbstractEdmFieldAbstractStructure<T> {
}

export interface AbstractEdmFieldWriteStructure<T extends AbstractEdmFieldWriteStructureData> extends AbstractEdmFieldAbstractStructure<T> {
  get valid(): boolean;
  isValid(langu: I18nLanguage): boolean;
}