import { AbstractEdmMetadataDataset, AbstractEdmMetadataField } from '@sdk-edm/metadata';

export interface AbstractEdmMetadataSalesSaleActor extends AbstractEdmMetadataDataset {
  emitter_legal_entity_name: AbstractEdmMetadataField;
  emitter_address_line: AbstractEdmMetadataField;
  emitter_additional_information: AbstractEdmMetadataField;
  emitter_city: AbstractEdmMetadataField;
  emitter_postal_code: AbstractEdmMetadataField;
  emitter_country: AbstractEdmMetadataField;
  emitter_region: AbstractEdmMetadataField;
  emitter_bank_name: AbstractEdmMetadataField;
  emitter_bank_account_name: AbstractEdmMetadataField;
  emitter_bank_account_number: AbstractEdmMetadataField;
  emitter_paypal: AbstractEdmMetadataField;
  receiver_id: AbstractEdmMetadataField;
  receiver_legal_entity_name: AbstractEdmMetadataField;
  receiver_address_line: AbstractEdmMetadataField;
  receiver_additional_information: AbstractEdmMetadataField;
  receiver_city: AbstractEdmMetadataField;
  receiver_postal_code: AbstractEdmMetadataField;
  receiver_country: AbstractEdmMetadataField;
  receiver_region: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataSalesSaleBasicData extends AbstractEdmMetadataDataset {
  logo: AbstractEdmMetadataField;
  id: AbstractEdmMetadataField;
  issued_at: AbstractEdmMetadataField;
  issued_by: AbstractEdmMetadataField;
  subtotal: AbstractEdmMetadataField;
  discount: AbstractEdmMetadataField;
  taxes: AbstractEdmMetadataField;
  total: AbstractEdmMetadataField;
  model: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataSalesSaleItem extends AbstractEdmMetadataDataset {
  item_id: AbstractEdmMetadataField;
  item_name: AbstractEdmMetadataField;
  unit_price: AbstractEdmMetadataField;
  quantity: AbstractEdmMetadataField;
  subtotal: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataSalesSaleTax extends AbstractEdmMetadataDataset {
  tax_id: AbstractEdmMetadataField;
  amount: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataSalesSale {
  actor: AbstractEdmMetadataSalesSaleActor;
  basic_data: AbstractEdmMetadataSalesSaleBasicData;
  item: AbstractEdmMetadataSalesSaleItem;
  tax: AbstractEdmMetadataSalesSaleTax;
}

