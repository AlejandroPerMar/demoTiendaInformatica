import { AbstractEdmMetadataContactContact, AbstractEdmMetadataContactContactAddress, AbstractEdmMetadataContactContactBasicData, AbstractEdmMetadataContactContactContactPerson, AbstractEdmMetadataContactContactPhone } from '@sdk-datamodel-metadata/contact-contact';
import { AbstractEdmCoreDatasetRead, AbstractEdmCoreObjectRead } from '@sdk-edm/core';
import { AbstractEdmFieldReadList } from '@sdk-edm/field-list';
import { AbstractEdmFieldReadObject, AbstractEdmFieldWriteObject } from '@sdk-edm/field-object';
import { AbstractEdmFieldReadRichText } from '@sdk-edm/field-rich-text';
import { AbstractEdmFieldReadString } from '@sdk-edm/field-string';
import { AbstractActorDeclaration } from '@sdk-ts/object-declaration';

import { EdmPayloadContactContact } from './contact-contact.payload';
import { AbstractEdmObjectPayloadContactContact } from './contact-contact.payload.types';

export interface AbstractEdmObjectReadContactContactAddress extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataContactContactAddress;
  label: AbstractEdmFieldReadString;
  address_line: AbstractEdmFieldReadString;
  additional_information: AbstractEdmFieldReadString;
  city: AbstractEdmFieldReadString;
  postal_code: AbstractEdmFieldReadString;
  country: AbstractEdmFieldReadList;
  region: AbstractEdmFieldReadList;
}


export interface AbstractEdmObjectReadContactContactBasicData extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataContactContactBasicData;
  name: AbstractEdmFieldReadString;
  type: string;
  pendingTasks: number;
  firstname: AbstractEdmFieldReadString;
  lastname: AbstractEdmFieldReadString;
  social_denomination: AbstractEdmFieldReadList;
  business_name: AbstractEdmFieldReadString;
  identification: AbstractEdmFieldReadString;
  country: AbstractEdmFieldReadList;
  defaultIVA: AbstractEdmFieldReadString;
  customer: boolean,
  provider: boolean,
}


export interface AbstractEdmObjectReadContactContactContactPerson extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataContactContactContactPerson;
  position: AbstractEdmFieldReadString;
  firstname: AbstractEdmFieldReadString;
  lastname: AbstractEdmFieldReadString;
  email1: AbstractEdmFieldReadString;
  email2: AbstractEdmFieldReadString;
  phone1: AbstractEdmFieldReadString;
  phone2: AbstractEdmFieldReadString;
  comments: AbstractEdmFieldReadRichText;
}


export interface AbstractEdmObjectReadContactContactPhone extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataContactContactPhone;
  label: AbstractEdmFieldReadString;
  type: AbstractEdmFieldReadList;
  phone_number: AbstractEdmFieldReadString;
}


export interface AbstractEdmObjectReadContactContact extends AbstractEdmCoreObjectRead<EdmPayloadContactContact, AbstractEdmObjectPayloadContactContact> {
  metadata: AbstractEdmMetadataContactContact;
  addresses: AbstractEdmObjectReadContactContactAddress[];
  basicData: AbstractEdmObjectReadContactContactBasicData;
  contactPersons: AbstractEdmObjectReadContactContactContactPerson[];
  phones: AbstractEdmObjectReadContactContactPhone[];

  load(): void;
  release(): void;
}


export interface AbstractEdmFieldReadObjectContactContact extends AbstractEdmFieldReadObject<EdmPayloadContactContact, AbstractEdmObjectReadContactContact> {
  type: string;
}


export interface AbstractEdmFieldWriteObjectContactContact extends AbstractEdmFieldWriteObject<EdmPayloadContactContact, AbstractEdmObjectReadContactContact> {
  type: string;
  loadFullDefinition(client: AbstractActorDeclaration, objectId: string): Promise<AbstractEdmObjectReadContactContact>;
}
