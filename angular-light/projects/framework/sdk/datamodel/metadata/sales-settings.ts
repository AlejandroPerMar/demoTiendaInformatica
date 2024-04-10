import { AbstractEdmMetadataDataset, AbstractEdmMetadataField } from '@sdk-edm/metadata';

export interface AbstractEdmMetadataSalesSettingsBasicData extends AbstractEdmMetadataDataset {
  logo: AbstractEdmMetadataField;
  invoice_model: AbstractEdmMetadataField;
  delivery_model: AbstractEdmMetadataField;
  quotation_model: AbstractEdmMetadataField;
  receipt_model: AbstractEdmMetadataField;
  legal_entity_name: AbstractEdmMetadataField;
  address_line: AbstractEdmMetadataField;
  additional_information: AbstractEdmMetadataField;
  city: AbstractEdmMetadataField;
  postal_code: AbstractEdmMetadataField;
  country: AbstractEdmMetadataField;
  region: AbstractEdmMetadataField;
  bank_name: AbstractEdmMetadataField;
  bank_account_name: AbstractEdmMetadataField;
  bank_account_number: AbstractEdmMetadataField;
  paypal: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataSalesSettings {
  basic_data: AbstractEdmMetadataSalesSettingsBasicData;
}

