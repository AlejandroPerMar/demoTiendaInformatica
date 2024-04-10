import { AbstractEdmMetadataSalesSaleActor, AbstractEdmMetadataSalesSaleBasicData, AbstractEdmMetadataSalesSaleItem, AbstractEdmMetadataSalesSaleTax } from '@sdk-datamodel-metadata/sales-sale';
import { AbstractEdmFieldWriteObjectAccountingTax } from '@sdk-datamodel-object/accounting-tax/accounting-tax.read.types';
import { AbstractEdmFieldWriteObjectContactContact } from '@sdk-datamodel-object/contact-contact/contact-contact.read.types';
import { AbstractEdmFieldWriteObjectSalesItem } from '@sdk-datamodel-object/sales-item/sales-item.read.types';
import { AbstractEdmCoreDatasetWrite } from '@sdk-edm/core';
import { AbstractEdmFieldWriteDecimal } from '@sdk-edm/field-decimal';
import { AbstractEdmFieldWriteImage } from '@sdk-edm/field-image';
import { AbstractEdmFieldWriteList } from '@sdk-edm/field-list';
import { AbstractEdmFieldWriteString } from '@sdk-edm/field-string';
import { AbstractEdmFieldWriteTimestamp } from '@sdk-edm/field-timestamp';
import { AbstractActorDeclaration } from '@sdk-ts/object-declaration';


export interface AbstractEdmObjectWriteSalesSaleBasicData extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataSalesSaleBasicData;
  logo: AbstractEdmFieldWriteImage;
  id: AbstractEdmFieldWriteString;
  issued_at: AbstractEdmFieldWriteTimestamp;
  issued_by: AbstractActorDeclaration;
  subtotal: AbstractEdmFieldWriteDecimal;
  discount: AbstractEdmFieldWriteDecimal;
  taxes: AbstractEdmFieldWriteDecimal;
  total: AbstractEdmFieldWriteDecimal;
  model: number;

  release(): void;
  createFormControl(): void;
  waitUntilReady(): Promise<any>;
  loadGUI(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;
}


export interface AbstractEdmObjectWriteSalesSaleItem extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataSalesSaleItem;
  item_id: AbstractEdmFieldWriteObjectSalesItem;
  item_name: AbstractEdmFieldWriteString;
  unit_price: AbstractEdmFieldWriteDecimal;
  quantity: AbstractEdmFieldWriteDecimal;
  subtotal: AbstractEdmFieldWriteDecimal;

  release(): void;
  createFormControl(): void;
  waitUntilReady(): Promise<any>;
  loadGUI(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;
}


export interface AbstractEdmObjectWriteSalesSaleTax extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataSalesSaleTax;
  tax_id: AbstractEdmFieldWriteObjectAccountingTax;
  amount: AbstractEdmFieldWriteDecimal;

  release(): void;
  createFormControl(): void;
  waitUntilReady(): Promise<any>;
  loadGUI(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;
}


export interface AbstractEdmObjectWriteSalesSaleActor extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataSalesSaleActor;
  emitter_legal_entity_name: AbstractEdmFieldWriteString;
  emitter_address_line: AbstractEdmFieldWriteString;
  emitter_additional_information: AbstractEdmFieldWriteString;
  emitter_city: AbstractEdmFieldWriteString;
  emitter_postal_code: AbstractEdmFieldWriteString;
  emitter_country: AbstractEdmFieldWriteList;
  emitter_region: AbstractEdmFieldWriteList;
  emitter_bank_name: AbstractEdmFieldWriteString;
  emitter_bank_account_name: AbstractEdmFieldWriteString;
  emitter_bank_account_number: AbstractEdmFieldWriteString;
  emitter_paypal: AbstractEdmFieldWriteString;
  receiver_id: AbstractEdmFieldWriteObjectContactContact;
  receiver_legal_entity_name: AbstractEdmFieldWriteString;
  receiver_address_line: AbstractEdmFieldWriteString;
  receiver_additional_information: AbstractEdmFieldWriteString;
  receiver_city: AbstractEdmFieldWriteString;
  receiver_postal_code: AbstractEdmFieldWriteString;
  receiver_country: AbstractEdmFieldWriteList;
  receiver_region: AbstractEdmFieldWriteList;

  release(): void;
  createFormControl(): void;
  waitUntilReady(): Promise<any>;
  loadGUI(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;
}


export interface AbstractEdmObjectWriteSalesSale {
  basic_data: AbstractEdmObjectWriteSalesSaleBasicData;
  items: AbstractEdmObjectWriteSalesSaleItem[];
  taxes: AbstractEdmObjectWriteSalesSaleTax[];
  actor: AbstractEdmObjectWriteSalesSaleActor;
}