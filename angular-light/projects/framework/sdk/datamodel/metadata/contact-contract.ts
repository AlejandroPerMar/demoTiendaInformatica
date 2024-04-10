import { AbstractEdmMetadataDataset, AbstractEdmMetadataField } from '@sdk-edm/metadata';

export interface AbstractEdmMetadataContactContractBasicData extends AbstractEdmMetadataDataset {
  label: AbstractEdmMetadataField;
  contract_id: AbstractEdmMetadataField;
  signature_date: AbstractEdmMetadataField;
  description: AbstractEdmMetadataField;
  documents: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataContactContractComment extends AbstractEdmMetadataDataset {
  comment: AbstractEdmMetadataField;
  documents: AbstractEdmMetadataField;
  date: AbstractEdmMetadataField;
  author: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataContactContractPurchaseOrder extends AbstractEdmMetadataDataset {
  order_id: AbstractEdmMetadataField;
  date: AbstractEdmMetadataField;
  description: AbstractEdmMetadataField;
  price: AbstractEdmMetadataField;
  currency: AbstractEdmMetadataField;
  documents: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataContactContract {
  basic_data: AbstractEdmMetadataContactContractBasicData;
  comment: AbstractEdmMetadataContactContractComment;
  purchase_order: AbstractEdmMetadataContactContractPurchaseOrder;
}

