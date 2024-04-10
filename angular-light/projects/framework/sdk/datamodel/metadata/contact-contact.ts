import { AbstractEdmMetadataDataset, AbstractEdmMetadataField } from '@sdk-edm/metadata';

export interface AbstractEdmMetadataContactContactAddress extends AbstractEdmMetadataDataset {
  label: AbstractEdmMetadataField;
  address_line: AbstractEdmMetadataField;
  additional_information: AbstractEdmMetadataField;
  city: AbstractEdmMetadataField;
  postal_code: AbstractEdmMetadataField;
  country: AbstractEdmMetadataField;
  region: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataContactContactBasicData extends AbstractEdmMetadataDataset {
  name: AbstractEdmMetadataField;
  type: AbstractEdmMetadataField;
  pending_tasks: AbstractEdmMetadataField;
  firstname: AbstractEdmMetadataField;
  lastname: AbstractEdmMetadataField;
  social_denomination: AbstractEdmMetadataField;
  business_name: AbstractEdmMetadataField;
  country: AbstractEdmMetadataField;
  default_iva: AbstractEdmMetadataField;
  identification: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataContactContactContactPerson extends AbstractEdmMetadataDataset {
  position: AbstractEdmMetadataField;
  firstname: AbstractEdmMetadataField;
  lastname: AbstractEdmMetadataField;
  email1: AbstractEdmMetadataField;
  email2: AbstractEdmMetadataField;
  phone1: AbstractEdmMetadataField;
  phone2: AbstractEdmMetadataField;
  comments: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataContactContactPhone extends AbstractEdmMetadataDataset {
  label: AbstractEdmMetadataField;
  type: AbstractEdmMetadataField;
  phone_number: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataContactContact {
  address: AbstractEdmMetadataContactContactAddress;
  basic_data: AbstractEdmMetadataContactContactBasicData;
  contact_person: AbstractEdmMetadataContactContactContactPerson;
  phone: AbstractEdmMetadataContactContactPhone;
}

