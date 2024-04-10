import { AbstractEdmMetadataCentralPublication, AbstractEdmMetadataCentralPublicationPublication } from '@sdk-datamodel-metadata/central-publication';
import { AbstractEdmCoreDatasetWrite, AbstractEdmCoreObjectWrite } from '@sdk-edm/core';
import { AbstractEdmFieldWriteArray } from '@sdk-edm/field-array';
import { AbstractEdmFieldWriteExternalUrl } from '@sdk-edm/field-external-url';
import { AbstractEdmFieldWriteI18n } from '@sdk-edm/field-i18n';
import { AbstractEdmFieldWriteImage } from '@sdk-edm/field-image';
import { AbstractEdmFieldWriteRichText } from '@sdk-edm/field-rich-text';
import { AbstractEdmFieldWriteString } from '@sdk-edm/field-string';
import { AbstractEdmFieldWriteYoutube } from '@sdk-edm/field-youtube';

import { EdmPayloadCentralPublication } from './central-publication.payload';
import { AbstractEdmObjectPayloadCentralPublication } from './central-publication.payload.types';

export interface AbstractEdmObjectWriteCentralPublicationBasicData extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataCentralPublicationPublication;
  title: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  content: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteRichText>;
  pictures: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteArray<AbstractEdmFieldWriteImage>>;
  videos_youtube: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteArray<AbstractEdmFieldWriteYoutube>>;
  external_links: AbstractEdmFieldWriteArray<AbstractEdmFieldWriteExternalUrl>;
  ref_author_name: AbstractEdmFieldWriteString;
  ref_author_catchphrase: AbstractEdmFieldWriteString;
  ref_author_avatar: AbstractEdmFieldWriteImage;
  ref_author_url: AbstractEdmFieldWriteExternalUrl;
  ref_post_url: AbstractEdmFieldWriteExternalUrl;
  ref_picture: AbstractEdmFieldWriteImage;
  original: boolean;

  createVideoYoutube(): AbstractEdmFieldWriteYoutube;
}


export interface AbstractEdmObjectWriteCentralPublication extends AbstractEdmCoreObjectWrite<EdmPayloadCentralPublication, AbstractEdmObjectPayloadCentralPublication> {
  metadata: AbstractEdmMetadataCentralPublication;
  basicData: AbstractEdmObjectWriteCentralPublicationBasicData;

  release(): void;
  createFormControl(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;
}
