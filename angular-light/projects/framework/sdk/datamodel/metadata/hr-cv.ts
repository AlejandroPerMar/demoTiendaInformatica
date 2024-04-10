import { AbstractEdmMetadataDataset, AbstractEdmMetadataField } from '@sdk-edm/metadata';

export interface AbstractEdmMetadataHrCvBasicData extends AbstractEdmMetadataDataset {
  title: AbstractEdmMetadataField;
  summary: AbstractEdmMetadataField;
  address_line_1: AbstractEdmMetadataField;
  address_line_2: AbstractEdmMetadataField;
  address_line_3: AbstractEdmMetadataField;
  phone_1: AbstractEdmMetadataField;
  phone_2: AbstractEdmMetadataField;
  email_1: AbstractEdmMetadataField;
  email_2: AbstractEdmMetadataField;
  skills: AbstractEdmMetadataField;
  certifications: AbstractEdmMetadataField;
  interest: AbstractEdmMetadataField;
  education: AbstractEdmMetadataField;
  experience: AbstractEdmMetadataField;
  language: AbstractEdmMetadataField;
  template: AbstractEdmMetadataField;
  public: AbstractEdmMetadataField;
  firstname: AbstractEdmMetadataField;
  lastname: AbstractEdmMetadataField;
  avatar: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataHrCv {
  basic_data: AbstractEdmMetadataHrCvBasicData;
}

