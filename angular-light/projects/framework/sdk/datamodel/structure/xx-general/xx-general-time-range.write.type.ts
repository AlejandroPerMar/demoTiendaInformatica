import { I18nLanguage } from '@i18n/i18n';
import { AbstractEdmFieldWriteStructureData } from '@sdk-edm/field-structure';
import { AbstractEdmFieldWriteTime } from '@sdk-edm/field-time';


export interface AbstractEdmStructureWriteXXGeneralTimeRange extends AbstractEdmFieldWriteStructureData {
  from: AbstractEdmFieldWriteTime;
  to: AbstractEdmFieldWriteTime;

  isNullOrEmpty(): boolean;
  release(): void;
  createFormControl(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;
  isValid(langu: I18nLanguage): boolean;
}