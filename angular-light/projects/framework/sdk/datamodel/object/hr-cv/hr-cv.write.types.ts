import { I18nLanguage } from '@i18n/i18n';
import { AbstractEdmMetadataHrCv, AbstractEdmMetadataHrCvBasicData } from '@sdk-datamodel-metadata/hr-cv';
import { AbstractEdmCoreDatasetWrite, AbstractEdmCoreObjectWrite } from '@sdk-edm/core';
import { AbstractEdmFieldWriteArray } from '@sdk-edm/field-array';
import { AbstractEdmFieldWriteBoolean } from '@sdk-edm/field-boolean';
import { AbstractEdmFieldWriteDate } from '@sdk-edm/field-date';
import { AbstractEdmFieldWriteI18n } from '@sdk-edm/field-i18n';
import { AbstractEdmFieldWriteImage } from '@sdk-edm/field-image';
import { AbstractEdmFieldWriteList } from '@sdk-edm/field-list';
import { AbstractEdmFieldWriteMultiLineString } from '@sdk-edm/field-multi-line-string';
import { AbstractEdmFieldWriteString } from '@sdk-edm/field-string';
import { AbstractEdmFieldWriteStructure, AbstractEdmFieldWriteStructureData } from '@sdk-edm/field-structure';

import { EdmPayloadHrCv } from './hr-cv.payload';
import { AbstractEdmObjectPayloadHrCv } from './hr-cv.payload.types';

export interface AbstractEdmStructureWriteHrCvEducation extends AbstractEdmFieldWriteStructureData {
  institution_name: AbstractEdmFieldWriteString;
  course: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  start_date: AbstractEdmFieldWriteDate;
  on_going: AbstractEdmFieldWriteBoolean;
  end_date: AbstractEdmFieldWriteDate;
  description: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteMultiLineString>;

  get valid(): boolean;
  isValid(langu: I18nLanguage): boolean;
}


export interface AbstractEdmStructureWriteHrCvExperience extends AbstractEdmFieldWriteStructureData {
  position: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  company: AbstractEdmFieldWriteString;
  start_date: AbstractEdmFieldWriteDate;
  on_going: AbstractEdmFieldWriteBoolean;
  end_date: AbstractEdmFieldWriteDate;
  description: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteMultiLineString>;

  get valid(): boolean;
  isValid(langu: I18nLanguage): boolean;
}


export interface AbstractEdmStructureWriteHrCvLanguage extends AbstractEdmFieldWriteStructureData {
  language: AbstractEdmFieldWriteList;
  level: AbstractEdmFieldWriteList;

  get valid(): boolean;
  isValid(langu: I18nLanguage): boolean;
  waitUntilReady(): Promise<any>;
}


export interface AbstractEdmObjectWriteHrCvBasicDataContact extends AbstractEdmCoreDatasetWrite {
  address_line_1: AbstractEdmFieldWriteString;
  address_line_2: AbstractEdmFieldWriteString;
  address_line_3: AbstractEdmFieldWriteString;
  phone_1: AbstractEdmFieldWriteString;
  phone_2: AbstractEdmFieldWriteString;
  email_1: AbstractEdmFieldWriteString;
  email_2: AbstractEdmFieldWriteString;
}


export interface AbstractEdmObjectWriteHrCvBasicDataProfile extends AbstractEdmCoreDatasetWrite {
  public: AbstractEdmFieldWriteBoolean;
  template: number;
  firstname: AbstractEdmFieldWriteString;
  lastname: AbstractEdmFieldWriteString;
  avatar: AbstractEdmFieldWriteImage;
  title: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  summary: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteMultiLineString>;

  isValid(langu: I18nLanguage): boolean;
}


export interface AbstractEdmObjectWriteHrCvBasicData extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataHrCvBasicData;
  profile: AbstractEdmObjectWriteHrCvBasicDataProfile;
  contact: AbstractEdmObjectWriteHrCvBasicDataContact;
  skills: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteArray<AbstractEdmFieldWriteString>>;
  certifications: AbstractEdmFieldWriteArray<AbstractEdmFieldWriteString>;
  interest: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteArray<AbstractEdmFieldWriteString>>;
  education: AbstractEdmFieldWriteStructure<AbstractEdmStructureWriteHrCvEducation>;
  experience: AbstractEdmFieldWriteStructure<AbstractEdmStructureWriteHrCvExperience>;
  language: AbstractEdmFieldWriteStructure<AbstractEdmStructureWriteHrCvLanguage>;
}


export interface AbstractEdmObjectWriteHrCv extends AbstractEdmCoreObjectWrite<EdmPayloadHrCv, AbstractEdmObjectPayloadHrCv> {
  metadata: AbstractEdmMetadataHrCv;
  basicData: AbstractEdmObjectWriteHrCvBasicData;

  release(): void;
  createFormControl(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;

  addExperience(): AbstractEdmStructureWriteHrCvExperience;
  addEducation(): AbstractEdmStructureWriteHrCvEducation;
  addLanguage(): AbstractEdmStructureWriteHrCvLanguage;
}
