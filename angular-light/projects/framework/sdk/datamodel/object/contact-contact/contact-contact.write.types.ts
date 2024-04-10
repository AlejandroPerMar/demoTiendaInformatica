import { AbstractEdmMetadataContactContact, AbstractEdmMetadataContactContactAddress, AbstractEdmMetadataContactContactBasicData, AbstractEdmMetadataContactContactContactPerson, AbstractEdmMetadataContactContactPhone } from '@sdk-datamodel-metadata/contact-contact';
import { AbstractEdmCoreDatasetWrite, AbstractEdmCoreObjectWrite } from '@sdk-edm/core';
import { AbstractEdmFieldWriteList } from '@sdk-edm/field-list';
import { AbstractEdmFieldWriteRichText } from '@sdk-edm/field-rich-text';
import { AbstractEdmFieldWriteString } from '@sdk-edm/field-string';

import { EdmPayloadContactContact } from './contact-contact.payload';
import { AbstractEdmObjectPayloadContactContact } from './contact-contact.payload.types';

export interface AbstractEdmObjectWriteContactContactAddress extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataContactContactAddress;
  uuid: string;
  _seqnr: number;
  label: AbstractEdmFieldWriteString;
  address_line: AbstractEdmFieldWriteString;
  additional_information: AbstractEdmFieldWriteString;
  city: AbstractEdmFieldWriteString;
  postal_code: AbstractEdmFieldWriteString;
  country: AbstractEdmFieldWriteList;
  region: AbstractEdmFieldWriteList;

  get valid(): boolean;
}


export interface AbstractEdmObjectWriteContactContactBasicData extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataContactContactBasicData;
  name: AbstractEdmFieldWriteString;
  type: string;
  pendingTasks: number;
  firstname: AbstractEdmFieldWriteString;
  lastname: AbstractEdmFieldWriteString;
  social_denomination: AbstractEdmFieldWriteList;
  business_name: AbstractEdmFieldWriteString;
  identification: AbstractEdmFieldWriteString;
  country: AbstractEdmFieldWriteList;
  defaultIVA: AbstractEdmFieldWriteString;

  get valid(): boolean;
}


export interface AbstractEdmObjectWriteContactContactContactPerson extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataContactContactContactPerson;
  uuid: string;
  _seqnr: number;
  position: AbstractEdmFieldWriteString;
  firstname: AbstractEdmFieldWriteString;
  lastname: AbstractEdmFieldWriteString;
  email1: AbstractEdmFieldWriteString;
  email2: AbstractEdmFieldWriteString;
  phone1: AbstractEdmFieldWriteString;
  phone2: AbstractEdmFieldWriteString;
  comments: AbstractEdmFieldWriteRichText;

  get valid(): boolean;
}


export interface AbstractEdmObjectWriteContactContactPhone extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataContactContactPhone;
  uuid: string;
  _seqnr: number;
  label: AbstractEdmFieldWriteString;
  type: AbstractEdmFieldWriteList;
  phone_number: AbstractEdmFieldWriteString;

  get valid(): boolean;
}


export interface AbstractEdmObjectWriteContactContact extends AbstractEdmCoreObjectWrite<EdmPayloadContactContact, AbstractEdmObjectPayloadContactContact> {
  metadata: AbstractEdmMetadataContactContact;
  addresses: AbstractEdmObjectWriteContactContactAddress[];
  basicData: AbstractEdmObjectWriteContactContactBasicData;
  contactPersons: AbstractEdmObjectWriteContactContactContactPerson[];
  phones: AbstractEdmObjectWriteContactContactPhone[];

  get validAddresses(): boolean;
  get validContactPersons(): boolean;
  get validPhones(): boolean;

  createFormControl(): void;
  release(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;

  addAddress(): AbstractEdmObjectWriteContactContactAddress;
  addContactPerson(): AbstractEdmObjectWriteContactContactContactPerson;
  addPhone(): AbstractEdmObjectWriteContactContactPhone;
}
