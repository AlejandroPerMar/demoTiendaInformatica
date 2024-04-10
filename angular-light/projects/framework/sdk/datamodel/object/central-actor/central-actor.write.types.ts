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
import { AbstractEdmStructureWriteXXGeneralTimeRange } from '@sdk-datamodel-structure/xx-general/xx-general-time-range.write.type';
import { AbstractEdmCoreDatasetWrite, AbstractEdmCoreObjectWrite } from '@sdk-edm/core';
import { AbstractEdmFieldWriteArray } from '@sdk-edm/field-array';
import { AbstractEdmFieldWriteDate } from '@sdk-edm/field-date';
import { AbstractEdmFieldReadDocument } from '@sdk-edm/field-document';
import { AbstractEdmFieldWriteI18n } from '@sdk-edm/field-i18n';
import { AbstractEdmFieldWriteImage } from '@sdk-edm/field-image';
import { AbstractEdmFieldWriteList } from '@sdk-edm/field-list';
import { AbstractEdmFieldWriteMultiList } from '@sdk-edm/field-multi-list';
import { AbstractEdmFieldWriteString } from '@sdk-edm/field-string';
import { AbstractEdmFieldWriteStructure } from '@sdk-edm/field-structure';

import { EdmPayloadCentralActor } from './central-actor.payload';
import { AbstractEdmObjectPayloadCentralActor } from './central-actor.payload.types';

export interface AbstractEdmObjectWriteCentralActorAddress extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataCentralActorAddress;
  uuid: string;
  _seqnr: number;
  label: AbstractEdmFieldWriteString;
  address_line: AbstractEdmFieldWriteString;
  additional_information: AbstractEdmFieldWriteString;
  city: AbstractEdmFieldWriteString;
  postal_code: AbstractEdmFieldWriteString;
  country: AbstractEdmFieldWriteList;
  region: AbstractEdmFieldWriteList;
}

export interface AbstractEdmObjectWriteCentralActorBanner extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataCentralActorBannerHeader;
  display_name: AbstractEdmFieldWriteString;
  catchphrase: AbstractEdmFieldWriteString;
  alias: AbstractEdmFieldWriteString;
  avatar: AbstractEdmFieldWriteImage;
  banner_sm: AbstractEdmFieldWriteImage;
  banner_md: AbstractEdmFieldWriteImage;
  banner_lg: AbstractEdmFieldWriteImage;
  banner_xl: AbstractEdmFieldWriteImage;
}

export interface AbstractEdmObjectWriteCentralActorBusiness extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataCentralActorBusiness;
  country: AbstractEdmFieldWriteList;
  name: AbstractEdmFieldWriteString;
  social_denomination: AbstractEdmFieldWriteList;
  creation_date: AbstractEdmFieldWriteDate;
  identification: AbstractEdmFieldWriteString;
  icon_app: AbstractEdmFieldWriteImage;
  icon_app_72: AbstractEdmFieldReadDocument;
  icon_app_96: AbstractEdmFieldReadDocument;
  icon_app_128: AbstractEdmFieldReadDocument;
  icon_app_144: AbstractEdmFieldReadDocument;
  icon_app_152: AbstractEdmFieldReadDocument;
  icon_app_192: AbstractEdmFieldReadDocument;
  icon_app_384: AbstractEdmFieldReadDocument;
  icon_app_512: AbstractEdmFieldReadDocument;
}

export interface AbstractEdmObjectWriteCentralActorGoogle extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataCentralActorGoogle;
  business_type: AbstractEdmFieldWriteList;
  description: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  images: AbstractEdmFieldWriteArray<AbstractEdmFieldWriteImage>;
  address_street: AbstractEdmFieldWriteString;
  address_locality: AbstractEdmFieldWriteString;
  address_postalcode: AbstractEdmFieldWriteString;
  address_region: AbstractEdmFieldWriteString;
  address_country: AbstractEdmFieldWriteString;
  phone_number: AbstractEdmFieldWriteString;
  geo_latitude: AbstractEdmFieldWriteString;
  geo_longitude: AbstractEdmFieldWriteString;
  opening_hours_monday: AbstractEdmFieldWriteStructure<AbstractEdmStructureWriteXXGeneralTimeRange>;
  opening_hours_tuesday: AbstractEdmFieldWriteStructure<AbstractEdmStructureWriteXXGeneralTimeRange>;
  opening_hours_wednesday: AbstractEdmFieldWriteStructure<AbstractEdmStructureWriteXXGeneralTimeRange>;
  opening_hours_thursday: AbstractEdmFieldWriteStructure<AbstractEdmStructureWriteXXGeneralTimeRange>;
  opening_hours_friday: AbstractEdmFieldWriteStructure<AbstractEdmStructureWriteXXGeneralTimeRange>;
  opening_hours_saturday: AbstractEdmFieldWriteStructure<AbstractEdmStructureWriteXXGeneralTimeRange>;
  opening_hours_sunday: AbstractEdmFieldWriteStructure<AbstractEdmStructureWriteXXGeneralTimeRange>;
}

export interface AbstractEdmObjectWriteCentralActorPhone extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataCentralActorPhone;
  uuid: string;
  _seqnr: number;
  label: AbstractEdmFieldWriteString;
  type: AbstractEdmFieldWriteList;
  phone_number: AbstractEdmFieldWriteString;
}

export interface AbstractEdmObjectWriteCentralActorSocialNetwork extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataCentralActorSocialNetwork;
  facebook: AbstractEdmFieldWriteString;
  instagram: AbstractEdmFieldWriteString;
  linkedin: AbstractEdmFieldWriteString;
  twitter: AbstractEdmFieldWriteString;
  youtube: AbstractEdmFieldWriteString;
}

export interface AbstractEdmObjectWriteCentralActorUser extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataCentralActorUser;
  firstname: AbstractEdmFieldWriteString;
  lastname: AbstractEdmFieldWriteString;
  birthdate: AbstractEdmFieldWriteDate;
  birthplace: AbstractEdmFieldWriteList;
  nationalities: AbstractEdmFieldWriteMultiList;
}

export interface AbstractEdmObjectWriteCentralActor extends AbstractEdmCoreObjectWrite<EdmPayloadCentralActor, AbstractEdmObjectPayloadCentralActor> {
  metadata: AbstractEdmMetadataCentralActor;
  addresses: AbstractEdmObjectWriteCentralActorAddress[];
  banner: AbstractEdmObjectWriteCentralActorBanner;
  business: AbstractEdmObjectWriteCentralActorBusiness;
  google: AbstractEdmObjectWriteCentralActorGoogle;
  phones: AbstractEdmObjectWriteCentralActorPhone[];
  socialNetwork: AbstractEdmObjectWriteCentralActorSocialNetwork;
  user: AbstractEdmObjectWriteCentralActorUser;

  get validAddresses(): boolean;
  get validPhones(): boolean;
  createFormControl(): void;
  release(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;

  createAddress(): AbstractEdmObjectWriteCentralActorAddress;
  createPhone(): AbstractEdmObjectWriteCentralActorPhone;
  createOpeningHoursRange(): AbstractEdmStructureWriteXXGeneralTimeRange;
}
