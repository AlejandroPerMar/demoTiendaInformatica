import { AbstractEdmMetadataCentralPublication, AbstractEdmMetadataCentralPublicationPublication } from '@sdk-datamodel-metadata/central-publication';
import { AbstractEdmCoreDatasetRead, AbstractEdmCoreObjectRead } from '@sdk-edm/core';
import { AbstractEdmFieldReadExternalUrl } from '@sdk-edm/field-external-url';
import { AbstractEdmFieldReadImage } from '@sdk-edm/field-image';
import { AbstractEdmFieldReadRichText } from '@sdk-edm/field-rich-text';
import { AbstractEdmFieldReadString } from '@sdk-edm/field-string';
import { AbstractEdmFieldReadTimestamp } from '@sdk-edm/field-timestamp';
import { AbstractEdmFieldReadYoutube } from '@sdk-edm/field-youtube';

import { EdmPayloadCentralPublication } from './central-publication.payload';
import { AbstractEdmObjectPayloadCentralPublication } from './central-publication.payload.types';



export interface AbstractEdmObjectReadCentralPublicationBasicData extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataCentralPublicationPublication;
  update_time: AbstractEdmFieldReadTimestamp;
  title: AbstractEdmFieldReadString;
  content: AbstractEdmFieldReadRichText;
  pictures: AbstractEdmFieldReadImage[];
  videos_youtube: AbstractEdmFieldReadYoutube[];
  external_links: AbstractEdmFieldReadExternalUrl[];
  ref_author_name: AbstractEdmFieldReadString;
  ref_author_catchphrase: AbstractEdmFieldReadString;
  ref_author_avatar: AbstractEdmFieldReadImage;
  ref_author_url: AbstractEdmFieldReadExternalUrl;
  ref_post_url: AbstractEdmFieldReadExternalUrl;
  ref_picture: AbstractEdmFieldReadImage;
  original: boolean;
  shared: boolean;
}


export interface AbstractEdmObjectReadCentralPublication extends AbstractEdmCoreObjectRead<EdmPayloadCentralPublication, AbstractEdmObjectPayloadCentralPublication> {
  metadata: AbstractEdmMetadataCentralPublication;
  basicData: AbstractEdmObjectReadCentralPublicationBasicData;
}
