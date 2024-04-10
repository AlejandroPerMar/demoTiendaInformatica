import { AbstractEdmMetadataDataset, AbstractEdmMetadataField } from '@sdk-edm/metadata';

export interface AbstractEdmMetadataCentralActorAddress extends AbstractEdmMetadataDataset {
  label: AbstractEdmMetadataField;
  address_line: AbstractEdmMetadataField;
  additional_information: AbstractEdmMetadataField;
  city: AbstractEdmMetadataField;
  postal_code: AbstractEdmMetadataField;
  country: AbstractEdmMetadataField;
  region: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataCentralActorBusiness extends AbstractEdmMetadataDataset {
  country: AbstractEdmMetadataField;
  name: AbstractEdmMetadataField;
  social_denomination: AbstractEdmMetadataField;
  creation_date: AbstractEdmMetadataField;
  identification: AbstractEdmMetadataField;
  icon_app: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataCentralActorGoogle extends AbstractEdmMetadataDataset {
  business_type: AbstractEdmMetadataField;
  description: AbstractEdmMetadataField;
  images: AbstractEdmMetadataField;
  opening_hours_monday: AbstractEdmMetadataField;
  opening_hours_tuesday: AbstractEdmMetadataField;
  opening_hours_wednesday: AbstractEdmMetadataField;
  opening_hours_thursday: AbstractEdmMetadataField;
  opening_hours_friday: AbstractEdmMetadataField;
  opening_hours_saturday: AbstractEdmMetadataField;
  opening_hours_sunday: AbstractEdmMetadataField;
  address_street: AbstractEdmMetadataField;
  address_locality: AbstractEdmMetadataField;
  address_postalcode: AbstractEdmMetadataField;
  address_region: AbstractEdmMetadataField;
  address_country: AbstractEdmMetadataField;
  phone_number: AbstractEdmMetadataField;
  geo_latitude: AbstractEdmMetadataField;
  geo_longitude: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataCentralActorPhone extends AbstractEdmMetadataDataset {
  label: AbstractEdmMetadataField;
  type: AbstractEdmMetadataField;
  phone_number: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataCentralActorSocialNetwork extends AbstractEdmMetadataDataset {
  facebook: AbstractEdmMetadataField;
  instagram: AbstractEdmMetadataField;
  linkedin: AbstractEdmMetadataField;
  twitter: AbstractEdmMetadataField;
  youtube: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataCentralActorUser extends AbstractEdmMetadataDataset {
  firstname: AbstractEdmMetadataField;
  lastname: AbstractEdmMetadataField;
  birthdate: AbstractEdmMetadataField;
  birthplace: AbstractEdmMetadataField;
  nationalities: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataCentralActor {
  address: AbstractEdmMetadataCentralActorAddress;
  business: AbstractEdmMetadataCentralActorBusiness;
  google: AbstractEdmMetadataCentralActorGoogle;
  phone: AbstractEdmMetadataCentralActorPhone;
  social_network: AbstractEdmMetadataCentralActorSocialNetwork;
  user: AbstractEdmMetadataCentralActorUser;
}

