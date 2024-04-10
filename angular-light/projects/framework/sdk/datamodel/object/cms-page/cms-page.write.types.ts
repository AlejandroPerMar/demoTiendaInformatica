import { I18nLanguage } from '@i18n/i18n';
import { AbstractEdmMetadataCmsPage, AbstractEdmMetadataCmsPageCardPayload, AbstractEdmMetadataCmsPageComponent, AbstractEdmMetadataCmsPageGalleryPayload, AbstractEdmMetadataCmsPageKvPayload, AbstractEdmMetadataCmsPagePage } from '@sdk-datamodel-metadata/cms-page';
import { AbstractEdmCoreDatasetWrite, AbstractEdmCoreObjectWrite } from '@sdk-edm/core';
import { AbstractEdmFieldWriteArray } from '@sdk-edm/field-array';
import { AbstractEdmFieldWriteBoolean } from '@sdk-edm/field-boolean';
import { AbstractEdmFieldWriteDocument } from '@sdk-edm/field-document';
import { AbstractEdmFieldWriteI18n } from '@sdk-edm/field-i18n';
import { AbstractEdmFieldWriteImage } from '@sdk-edm/field-image';
import { AbstractEdmFieldWriteString } from '@sdk-edm/field-string';

import { EdmPayloadCmsPage } from './cms-page.payload';
import { AbstractEdmObjectPayloadCmsPage } from './cms-page.payload.types';
import { AbstractEdmObjectCmsPageCardMetadata, AbstractEdmObjectCmsPageGalleryMetadata, AbstractEdmObjectCmsPageKVMetadata } from './cms-page.types';

export interface AbstractEdmObjectWriteCmsPageCard {
  metadata: AbstractEdmObjectCmsPageCardMetadata;
  payload: AbstractEdmObjectWriteCmsPageCardPayload[];
  addPayload(): void;
}


export interface AbstractEdmObjectWriteCmsPageCardPayload extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataCmsPageCardPayload;
  component_id: string;
  image: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteImage>;
  images: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteArray<AbstractEdmFieldWriteImage>>;
  document: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteDocument>;
  documents: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteArray<AbstractEdmFieldWriteDocument>>;
  text_01: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  text_02: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  text_03: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  text_04: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  text_05: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  text_06: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  text_07: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  text_08: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  text_09: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  text_10: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  bool_01: AbstractEdmFieldWriteBoolean;
  bool_02: AbstractEdmFieldWriteBoolean;
  bool_03: AbstractEdmFieldWriteBoolean;
}


export interface AbstractEdmObjectWriteCmsPageComponent extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataCmsPageComponent;
  component_id: string;
  component_type: string;
  component_label: string;

  card: AbstractEdmObjectWriteCmsPageCard;
  gallery: AbstractEdmObjectWriteCmsPageGallery;
  kv: AbstractEdmObjectWriteCmsPageKV;
}


export interface AbstractEdmObjectWriteCmsPageGallery {
  metadata: AbstractEdmObjectCmsPageGalleryMetadata;
  payload: AbstractEdmObjectWriteCmsPageGalleryPayload[];
  addPayload(): void;
}


export interface AbstractEdmObjectWriteCmsPageGalleryPayload extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataCmsPageGalleryPayload;
  component_id: string;
  image: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteImage>;
  title: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  header: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  text: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  bool_01: AbstractEdmFieldWriteBoolean;
  bool_02: AbstractEdmFieldWriteBoolean;
  bool_03: AbstractEdmFieldWriteBoolean;
}


export interface AbstractEdmObjectWriteCmsPageKV {
  metadata: AbstractEdmObjectCmsPageKVMetadata;
  payload: AbstractEdmObjectWriteCmsPageKVPayload;
}


export interface AbstractEdmObjectWriteCmsPageKVPayload extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataCmsPageKvPayload;
  component_id: string;
  text_01: AbstractEdmFieldWriteString;
  text_02: AbstractEdmFieldWriteString;
  text_03: AbstractEdmFieldWriteString;
  text_04: AbstractEdmFieldWriteString;
  text_05: AbstractEdmFieldWriteString;
  text_06: AbstractEdmFieldWriteString;
  text_07: AbstractEdmFieldWriteString;
  text_08: AbstractEdmFieldWriteString;
  text_09: AbstractEdmFieldWriteString;
  text_10: AbstractEdmFieldWriteString;
  localized_text_01: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  localized_text_02: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  localized_text_03: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  localized_text_04: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  localized_text_05: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  localized_text_06: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  localized_text_07: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  localized_text_08: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  localized_text_09: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  localized_text_10: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
}


export interface AbstractEdmObjectWriteCmsPagePage extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataCmsPagePage;
  google_ld_json: string;
  title: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  keywords: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteArray<AbstractEdmFieldWriteString>>;
  description: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  images: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteArray<AbstractEdmFieldWriteImage>>;
}


export interface AbstractEdmObjectWriteCmsPage extends AbstractEdmCoreObjectWrite<EdmPayloadCmsPage, AbstractEdmObjectPayloadCmsPage> {
  metadata: AbstractEdmMetadataCmsPage;
  page: AbstractEdmObjectWriteCmsPagePage;
  component: AbstractEdmObjectWriteCmsPageComponent[];
  language: I18nLanguage;
  languages: I18nLanguage[];
  sitename: string;

  createFormControl(): void;
  release(): void;
}