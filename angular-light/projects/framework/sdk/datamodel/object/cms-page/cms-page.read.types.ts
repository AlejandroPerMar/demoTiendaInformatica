import { I18nLanguage } from '@i18n/i18n';
import { AbstractEdmMetadataCmsPage, AbstractEdmMetadataCmsPageCardPayload, AbstractEdmMetadataCmsPageComponent, AbstractEdmMetadataCmsPageGalleryPayload, AbstractEdmMetadataCmsPageKvPayload, AbstractEdmMetadataCmsPagePage } from '@sdk-datamodel-metadata/cms-page';
import { AbstractEdmCoreDatasetRead, AbstractEdmCoreObjectRead } from '@sdk-edm/core';
import { AbstractEdmFieldReadBoolean } from '@sdk-edm/field-boolean';
import { AbstractEdmFieldReadDocument } from '@sdk-edm/field-document';
import { AbstractEdmFieldReadImage } from '@sdk-edm/field-image';
import { AbstractEdmFieldReadString } from '@sdk-edm/field-string';

import { EdmPayloadCmsPage } from './cms-page.payload';
import { AbstractEdmObjectPayloadCmsPage } from './cms-page.payload.types';
import { AbstractEdmObjectCmsPageCardMetadata, AbstractEdmObjectCmsPageGalleryMetadata, AbstractEdmObjectCmsPageKVMetadata } from './cms-page.types';



export interface AbstractEdmObjectReadCmsPageCard {
  metadata: AbstractEdmObjectCmsPageCardMetadata;
  payload: AbstractEdmObjectReadCmsPageCardPayload[];
}


export interface AbstractEdmObjectReadCmsPageCardPayload extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataCmsPageCardPayload;
  component_id: string;
  image: AbstractEdmFieldReadImage;
  images: AbstractEdmFieldReadImage[];
  document: AbstractEdmFieldReadDocument;
  documents: AbstractEdmFieldReadDocument[];
  text_01: AbstractEdmFieldReadString;
  text_02: AbstractEdmFieldReadString;
  text_03: AbstractEdmFieldReadString;
  text_04: AbstractEdmFieldReadString;
  text_05: AbstractEdmFieldReadString;
  text_06: AbstractEdmFieldReadString;
  text_07: AbstractEdmFieldReadString;
  text_08: AbstractEdmFieldReadString;
  text_09: AbstractEdmFieldReadString;
  text_10: AbstractEdmFieldReadString;
  bool_01: AbstractEdmFieldReadBoolean;
  bool_02: AbstractEdmFieldReadBoolean;
  bool_03: AbstractEdmFieldReadBoolean;
}


export interface AbstractEdmObjectReadCmsPageComponent extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataCmsPageComponent;
  component_id: string;
  component_type: string;
  component_label: string;

  card: AbstractEdmObjectReadCmsPageCard;
  gallery: AbstractEdmObjectReadCmsPageGallery;
  kv: AbstractEdmObjectReadCmsPageKV;
}


export interface AbstractEdmObjectReadCmsPageGallery {
  metadata: AbstractEdmObjectCmsPageGalleryMetadata;
  payload: AbstractEdmObjectReadCmsPageGalleryPayload[];
}


export interface AbstractEdmObjectReadCmsPageGalleryPayload extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataCmsPageGalleryPayload;
  component_id: string;
  image: AbstractEdmFieldReadImage;
  title: AbstractEdmFieldReadString;
  header: AbstractEdmFieldReadString;
  text: AbstractEdmFieldReadString;
  bool_01: AbstractEdmFieldReadBoolean;
  bool_02: AbstractEdmFieldReadBoolean;
  bool_03: AbstractEdmFieldReadBoolean;
}


export interface AbstractEdmObjectReadCmsPageKV {
  metadata: AbstractEdmObjectCmsPageKVMetadata;
  payload: AbstractEdmObjectReadCmsPageKVPayload;
}


export interface AbstractEdmObjectReadCmsPageKVPayload extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataCmsPageKvPayload;
  component_id: string;
  text_01: AbstractEdmFieldReadString;
  text_02: AbstractEdmFieldReadString;
  text_03: AbstractEdmFieldReadString;
  text_04: AbstractEdmFieldReadString;
  text_05: AbstractEdmFieldReadString;
  text_06: AbstractEdmFieldReadString;
  text_07: AbstractEdmFieldReadString;
  text_08: AbstractEdmFieldReadString;
  text_09: AbstractEdmFieldReadString;
  text_10: AbstractEdmFieldReadString;
  localized_text_01: AbstractEdmFieldReadString;
  localized_text_02: AbstractEdmFieldReadString;
  localized_text_03: AbstractEdmFieldReadString;
  localized_text_04: AbstractEdmFieldReadString;
  localized_text_05: AbstractEdmFieldReadString;
  localized_text_06: AbstractEdmFieldReadString;
  localized_text_07: AbstractEdmFieldReadString;
  localized_text_08: AbstractEdmFieldReadString;
  localized_text_09: AbstractEdmFieldReadString;
  localized_text_10: AbstractEdmFieldReadString;
}


export interface AbstractEdmObjectReadCmsPagePage extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataCmsPagePage;
  google_ld_json: string;
  title: AbstractEdmFieldReadString;
  keywords: AbstractEdmFieldReadString[];
  description: AbstractEdmFieldReadString;
  images: AbstractEdmFieldReadImage[];
}


export type AbstractEdmObjectReadCmsPageCardPayload_ = {
  [key: string]: AbstractEdmObjectReadCmsPageCardPayload[];
}

export type AbstractEdmObjectReadCmsPageGalleryPayload_ = {
  [key: string]: AbstractEdmObjectReadCmsPageGalleryPayload[];
}

export type AbstractEdmObjectReadCmsPageKVPayload_ = {
  [key: string]: AbstractEdmObjectReadCmsPageKVPayload;
}

export interface AbstractEdmObjectReadCmsPage extends AbstractEdmCoreObjectRead<EdmPayloadCmsPage, AbstractEdmObjectPayloadCmsPage> {
  metadata: AbstractEdmMetadataCmsPage;
  page: AbstractEdmObjectReadCmsPagePage;
  components: AbstractEdmObjectReadCmsPageComponent[];
  cards: AbstractEdmObjectReadCmsPageCardPayload_;
  firstCards(id: string, counter: number): AbstractEdmObjectReadCmsPageCardPayload[];
  lastCards(id: string, counter: number): AbstractEdmObjectReadCmsPageCardPayload[];
  galleries: AbstractEdmObjectReadCmsPageGalleryPayload_;
  firstGalleries(id: string, counter: number): AbstractEdmObjectReadCmsPageGalleryPayload[];
  lastGalleries(id: string, counter: number): AbstractEdmObjectReadCmsPageGalleryPayload[];
  kv: AbstractEdmObjectReadCmsPageKVPayload_;
  language: I18nLanguage;
  languages: I18nLanguage[];
  sitename: string;

  setHeaders(): void;
}