import { AbstractEdmMetadataDataset, AbstractEdmMetadataField } from '@sdk-edm/metadata';

export interface AbstractEdmMetadataSalesItemBasicData extends AbstractEdmMetadataDataset {
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

export interface AbstractEdmMetadataSalesItemDiscount extends AbstractEdmMetadataDataset {
  valid_from: AbstractEdmMetadataField;
  valid_to: AbstractEdmMetadataField;
  percentage: AbstractEdmMetadataField;
  amount: AbstractEdmMetadataField;
  created_at: AbstractEdmMetadataField;
  created_by: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataSalesItemPrice extends AbstractEdmMetadataDataset {
  valid_from: AbstractEdmMetadataField;
  unit_price: AbstractEdmMetadataField;
  created_at: AbstractEdmMetadataField;
  created_by: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataSalesItemTax extends AbstractEdmMetadataDataset {
  taxid: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataSalesItem {
  basic_data: AbstractEdmMetadataSalesItemBasicData;
  discount: AbstractEdmMetadataSalesItemDiscount;
  price: AbstractEdmMetadataSalesItemPrice;
  tax: AbstractEdmMetadataSalesItemTax;
}

