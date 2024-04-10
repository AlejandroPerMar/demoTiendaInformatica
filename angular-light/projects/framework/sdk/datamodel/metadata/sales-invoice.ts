import { AbstractEdmMetadataDataset, AbstractEdmMetadataField } from '@sdk-edm/metadata';

export interface AbstractEdmMetadataSalesInvoiceBasicData extends AbstractEdmMetadataDataset {
  purchase_order: AbstractEdmMetadataField;
  due_date: AbstractEdmMetadataField;
  status: AbstractEdmMetadataField;
  comments: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataSalesInvoice {
  basic_data: AbstractEdmMetadataSalesInvoiceBasicData;
}

