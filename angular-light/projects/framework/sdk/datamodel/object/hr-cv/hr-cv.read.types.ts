import { AbstractEdmMetadataHrCv, AbstractEdmMetadataHrCvBasicData } from '@sdk-datamodel-metadata/hr-cv';
import { AbstractEdmCoreDatasetRead, AbstractEdmCoreObjectRead } from '@sdk-edm/core';
import { AbstractEdmFieldReadBoolean } from '@sdk-edm/field-boolean';
import { AbstractEdmFieldReadDate } from '@sdk-edm/field-date';
import { AbstractEdmFieldReadImage } from '@sdk-edm/field-image';
import { AbstractEdmFieldReadList } from '@sdk-edm/field-list';
import { AbstractEdmFieldReadMultiLineString } from '@sdk-edm/field-multi-line-string';
import { AbstractEdmFieldReadString } from '@sdk-edm/field-string';
import { AbstractEdmFieldReadStructure, AbstractEdmFieldReadStructureData } from '@sdk-edm/field-structure';

import { EdmPayloadHrCv } from './hr-cv.payload';
import { AbstractEdmObjectPayloadHrCv } from './hr-cv.payload.types';

export interface AbstractEdmStructureReadHrCvEducation extends AbstractEdmFieldReadStructureData {
  institution_name: AbstractEdmFieldReadString;
  course: AbstractEdmFieldReadString;
  start_date: AbstractEdmFieldReadDate;
  on_going: AbstractEdmFieldReadBoolean;
  end_date: AbstractEdmFieldReadDate;
  description: AbstractEdmFieldReadMultiLineString;
}


export interface AbstractEdmStructureReadHrCvExperience extends AbstractEdmFieldReadStructureData {
  position: AbstractEdmFieldReadString;
  company: AbstractEdmFieldReadString;
  start_date: AbstractEdmFieldReadDate;
  on_going: AbstractEdmFieldReadBoolean;
  end_date: AbstractEdmFieldReadDate;
  description: AbstractEdmFieldReadMultiLineString;
}


export interface AbstractEdmStructureReadHrCvLanguage extends AbstractEdmFieldReadStructureData {
  language: AbstractEdmFieldReadList;
  level: AbstractEdmFieldReadList;
}


export interface AbstractEdmObjectReadHrCvBasicData extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataHrCvBasicData;
  public: AbstractEdmFieldReadBoolean;
  template: number;
  firstname: AbstractEdmFieldReadString;
  lastname: AbstractEdmFieldReadString;
  avatar: AbstractEdmFieldReadImage;
  title: AbstractEdmFieldReadString;
  summary: AbstractEdmFieldReadMultiLineString;
  address_line_1: AbstractEdmFieldReadString;
  address_line_2: AbstractEdmFieldReadString;
  address_line_3: AbstractEdmFieldReadString;
  phone_1: AbstractEdmFieldReadString;
  phone_2: AbstractEdmFieldReadString;
  email_1: AbstractEdmFieldReadString;
  email_2: AbstractEdmFieldReadString;
  skills: AbstractEdmFieldReadString[];
  certifications: AbstractEdmFieldReadString[];
  interest: AbstractEdmFieldReadString[];
  education: AbstractEdmFieldReadStructure<AbstractEdmStructureReadHrCvEducation>;
  experience: AbstractEdmFieldReadStructure<AbstractEdmStructureReadHrCvExperience>;
  language: AbstractEdmFieldReadStructure<AbstractEdmStructureReadHrCvLanguage>;
}


export interface AbstractEdmObjectReadHrCv extends AbstractEdmCoreObjectRead<EdmPayloadHrCv, AbstractEdmObjectPayloadHrCv> {
  metadata: AbstractEdmMetadataHrCv;
  basicData: AbstractEdmObjectReadHrCvBasicData;
  load(): void;
  release(): void;
}
