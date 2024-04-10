import { AbstractEdmMetadataDataset, AbstractEdmMetadataField } from '@sdk-edm/metadata';

export interface AbstractEdmMetadataProductServiceDescriptionBasicData extends AbstractEdmMetadataDataset {
  avatar: AbstractEdmMetadataField;
  name: AbstractEdmMetadataField;
  brand: AbstractEdmMetadataField;
  barcode: AbstractEdmMetadataField;
  measure_unit: AbstractEdmMetadataField;
  qrcode: AbstractEdmMetadataField;
  pictures: AbstractEdmMetadataField;
  description_short_text: AbstractEdmMetadataField;
  description_pictures: AbstractEdmMetadataField;
  description_long_text: AbstractEdmMetadataField;
  description_youtubes: AbstractEdmMetadataField;
  description_external_links: AbstractEdmMetadataField;
  allow_comments: AbstractEdmMetadataField;
  active: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataProductServiceDescription {
  basic_data: AbstractEdmMetadataProductServiceDescriptionBasicData;
}

