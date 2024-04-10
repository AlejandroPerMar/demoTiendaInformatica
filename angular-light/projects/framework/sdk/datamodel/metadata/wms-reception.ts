import { AbstractEdmMetadataDataset, AbstractEdmMetadataField } from '@sdk-edm/metadata';

export interface AbstractEdmMetadataWmsReceptionInvoice extends AbstractEdmMetadataDataset {
  warehouse: AbstractEdmMetadataField;
  provider: AbstractEdmMetadataField;
  id: AbstractEdmMetadataField;
  date: AbstractEdmMetadataField;
  documents: AbstractEdmMetadataField;
  discount: AbstractEdmMetadataField;
  total_price_no_tax: AbstractEdmMetadataField;
  total_price_with_tax: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataWmsReceptionItem extends AbstractEdmMetadataDataset {
  itemid: AbstractEdmMetadataField;
  quantity: AbstractEdmMetadataField;
  unit_price: AbstractEdmMetadataField;
  total_price: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataWmsReceptionTax extends AbstractEdmMetadataDataset {
  taxid: AbstractEdmMetadataField;
  amount: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataWmsReceptionVersion extends AbstractEdmMetadataDataset {
  created_time: AbstractEdmMetadataField;
  created_user: AbstractEdmMetadataField;
  deleted: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataWmsReception {
  invoice: AbstractEdmMetadataWmsReceptionInvoice;
  item: AbstractEdmMetadataWmsReceptionItem;
  tax: AbstractEdmMetadataWmsReceptionTax;
  version: AbstractEdmMetadataWmsReceptionVersion;
}

