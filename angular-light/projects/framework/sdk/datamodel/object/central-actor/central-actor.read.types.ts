import {
  AbstractEdmMetadataCentralActor,
  AbstractEdmMetadataCentralActorAddress,
  AbstractEdmMetadataCentralActorBusiness,
  AbstractEdmMetadataCentralActorGoogle,
  AbstractEdmMetadataCentralActorPhone,
  AbstractEdmMetadataCentralActorSocialNetwork,
  AbstractEdmMetadataCentralActorUser,
} from '@sdk-datamodel-metadata/central-actor';
import { AbstractEdmMetadataCentralActorBannerHeader } from '@sdk-datamodel-metadata/central-actor-banner';
import { AbstractEdmStructureReadXXGeneralTimeRange } from '@sdk-datamodel-structure/xx-general/xx-general-time-range.read.type';
import { AbstractEdmCoreDatasetRead, AbstractEdmCoreObjectRead } from '@sdk-edm/core';
import { AbstractEdmFieldReadDate } from '@sdk-edm/field-date';
import { AbstractEdmFieldReadDocument } from '@sdk-edm/field-document';
import { AbstractEdmFieldReadImage } from '@sdk-edm/field-image';
import { AbstractEdmFieldReadList } from '@sdk-edm/field-list';
import { AbstractEdmFieldReadMultiList } from '@sdk-edm/field-multi-list';
import { AbstractEdmFieldReadString } from '@sdk-edm/field-string';
import { AbstractEdmFieldReadStructure } from '@sdk-edm/field-structure';

import { EdmPayloadCentralActor } from './central-actor.payload';
import { AbstractEdmObjectPayloadCentralActor } from './central-actor.payload.types';

export interface AbstractEdmObjectReadCentralActorAddress extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataCentralActorAddress;
  label: AbstractEdmFieldReadString;
  address_line: AbstractEdmFieldReadString;
  additional_information: AbstractEdmFieldReadString;
  city: AbstractEdmFieldReadString;
  postal_code: AbstractEdmFieldReadString;
  country: AbstractEdmFieldReadList;
  region: AbstractEdmFieldReadList;
}

export interface AbstractEdmObjectReadCentralActorBanner extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataCentralActorBannerHeader;
  display_name: AbstractEdmFieldReadString;
  catchphrase: AbstractEdmFieldReadString;
  alias: AbstractEdmFieldReadString;
  avatar: AbstractEdmFieldReadImage;
  banner_sm: AbstractEdmFieldReadImage;
  banner_md: AbstractEdmFieldReadImage;
  banner_lg: AbstractEdmFieldReadImage;
  banner_xl: AbstractEdmFieldReadImage;
}

export interface AbstractEdmObjectReadCentralActorBusiness extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataCentralActorBusiness;
  country: AbstractEdmFieldReadList;
  name: AbstractEdmFieldReadString;
  social_denomination: AbstractEdmFieldReadList;
  creation_date: AbstractEdmFieldReadDate;
  identification: AbstractEdmFieldReadString;
  icon_app_72: AbstractEdmFieldReadDocument;
  icon_app_96: AbstractEdmFieldReadDocument;
  icon_app_128: AbstractEdmFieldReadDocument;
  icon_app_144: AbstractEdmFieldReadDocument;
  icon_app_152: AbstractEdmFieldReadDocument;
  icon_app_192: AbstractEdmFieldReadDocument;
  icon_app_384: AbstractEdmFieldReadDocument;
  icon_app_512: AbstractEdmFieldReadDocument;
}

export interface AbstractEdmObjectReadCentralActorGoogle extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataCentralActorGoogle;
  business_type: AbstractEdmFieldReadList;
  description: AbstractEdmFieldReadString;
  images: AbstractEdmFieldReadImage[];
  address_street: AbstractEdmFieldReadString;
  address_locality: AbstractEdmFieldReadString;
  address_postalcode: AbstractEdmFieldReadString;
  address_region: AbstractEdmFieldReadString;
  address_country: AbstractEdmFieldReadString;
  phone_number: AbstractEdmFieldReadString;
  geo_latitude: AbstractEdmFieldReadString;
  geo_longitude: AbstractEdmFieldReadString;
  opening_hours_monday: AbstractEdmFieldReadStructure<AbstractEdmStructureReadXXGeneralTimeRange>;
  opening_hours_tuesday: AbstractEdmFieldReadStructure<AbstractEdmStructureReadXXGeneralTimeRange>;
  opening_hours_wednesday: AbstractEdmFieldReadStructure<AbstractEdmStructureReadXXGeneralTimeRange>;
  opening_hours_thursday: AbstractEdmFieldReadStructure<AbstractEdmStructureReadXXGeneralTimeRange>;
  opening_hours_friday: AbstractEdmFieldReadStructure<AbstractEdmStructureReadXXGeneralTimeRange>;
  opening_hours_saturday: AbstractEdmFieldReadStructure<AbstractEdmStructureReadXXGeneralTimeRange>;
  opening_hours_sunday: AbstractEdmFieldReadStructure<AbstractEdmStructureReadXXGeneralTimeRange>;
}

export interface AbstractEdmObjectReadCentralActorPhone extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataCentralActorPhone;
  label: AbstractEdmFieldReadString;
  type: AbstractEdmFieldReadList;
  phone_number: AbstractEdmFieldReadString;
}

export interface AbstractEdmObjectReadCentralActorSocialNetwork extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataCentralActorSocialNetwork;
  facebook: AbstractEdmFieldReadString;
  instagram: AbstractEdmFieldReadString;
  linkedin: AbstractEdmFieldReadString;
  twitter: AbstractEdmFieldReadString;
  youtube: AbstractEdmFieldReadString;
}

export interface AbstractEdmObjectReadCentralActorUser extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataCentralActorUser;
  firstname: AbstractEdmFieldReadString;
  lastname: AbstractEdmFieldReadString;
  birthdate: AbstractEdmFieldReadDate;
  birthplace: AbstractEdmFieldReadList;
  nationalities: AbstractEdmFieldReadMultiList;
}

export interface AbstractEdmObjectReadCentralActor extends AbstractEdmCoreObjectRead<EdmPayloadCentralActor, AbstractEdmObjectPayloadCentralActor> {
  metadata: AbstractEdmMetadataCentralActor;
  addresses: AbstractEdmObjectReadCentralActorAddress[];
  banner: AbstractEdmObjectReadCentralActorBanner;
  business: AbstractEdmObjectReadCentralActorBusiness;
  google: AbstractEdmObjectReadCentralActorGoogle;
  phones: AbstractEdmObjectReadCentralActorPhone[];
  socialNetwork: AbstractEdmObjectReadCentralActorSocialNetwork;
  user: AbstractEdmObjectReadCentralActorUser;
}