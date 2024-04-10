import { AbstractEdmMetadataDataset, AbstractEdmMetadataField } from '@sdk-edm/metadata';

export interface AbstractEdmMetadataWmsItemBasicData extends AbstractEdmMetadataDataset {
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

export interface AbstractEdmMetadataWmsItemRawMaterial extends AbstractEdmMetadataDataset {
  product: AbstractEdmMetadataField;
  quantity: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataWmsItem {
  basic_data: AbstractEdmMetadataWmsItemBasicData;
  raw_material: AbstractEdmMetadataWmsItemRawMaterial;
}

