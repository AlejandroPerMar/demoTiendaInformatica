import { AbstractEdmMetadataDataset, AbstractEdmMetadataField } from '@sdk-edm/metadata';

export interface AbstractEdmMetadataCentralPublicationPublication extends AbstractEdmMetadataDataset {
  title: AbstractEdmMetadataField;
  content: AbstractEdmMetadataField;
  pictures: AbstractEdmMetadataField;
  videos_youtube: AbstractEdmMetadataField;
  external_links: AbstractEdmMetadataField;
  ref_author_name: AbstractEdmMetadataField;
  ref_author_catchphrase: AbstractEdmMetadataField;
  ref_author_avatar: AbstractEdmMetadataField;
  ref_author_url: AbstractEdmMetadataField;
  ref_post_url: AbstractEdmMetadataField;
  ref_picture: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataCentralPublication {
  publication: AbstractEdmMetadataCentralPublicationPublication;
}

