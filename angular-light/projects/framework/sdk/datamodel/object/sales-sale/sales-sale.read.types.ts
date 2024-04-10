import { AbstractEdmMetadataSalesSaleActor, AbstractEdmMetadataSalesSaleBasicData, AbstractEdmMetadataSalesSaleItem, AbstractEdmMetadataSalesSaleTax } from '@sdk-datamodel-metadata/sales-sale';
import { AbstractEdmFieldReadObjectAccountingTax } from '@sdk-datamodel-object/accounting-tax/accounting-tax.read.types';
import { AbstractEdmFieldReadObjectContactContact } from '@sdk-datamodel-object/contact-contact/contact-contact.read.types';
import { AbstractEdmFieldReadObjectSalesItem } from '@sdk-datamodel-object/sales-item/sales-item.read.types';
import { AbstractEdmCoreDatasetRead } from '@sdk-edm/core';
import { AbstractEdmFieldReadDecimal } from '@sdk-edm/field-decimal';
import { AbstractEdmFieldReadImage } from '@sdk-edm/field-image';
import { AbstractEdmFieldReadList } from '@sdk-edm/field-list';
import { AbstractEdmFieldReadString } from '@sdk-edm/field-string';
import { AbstractEdmFieldReadTimestamp } from '@sdk-edm/field-timestamp';
import { AbstractActorDeclaration } from '@sdk-ts/object-declaration';


export interface AbstractEdmObjectReadSalesSaleBasicData extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataSalesSaleBasicData;
  logo: AbstractEdmFieldReadImage;
  id: AbstractEdmFieldReadString;
  issued_at: AbstractEdmFieldReadTimestamp;
  issued_by: AbstractActorDeclaration;
  subtotal: AbstractEdmFieldReadDecimal;
  discount: AbstractEdmFieldReadDecimal;
  taxes: AbstractEdmFieldReadDecimal;
  total: AbstractEdmFieldReadDecimal;
  model: number;
}


export interface AbstractEdmObjectReadSalesSaleItem extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataSalesSaleItem;
  item_id: AbstractEdmFieldReadObjectSalesItem;
  item_name: AbstractEdmFieldReadString;
  unit_price: AbstractEdmFieldReadDecimal;
  quantity: AbstractEdmFieldReadDecimal;
  subtotal: AbstractEdmFieldReadDecimal;
}


export interface AbstractEdmObjectReadSalesSaleTax extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataSalesSaleTax;
  tax_id: AbstractEdmFieldReadObjectAccountingTax;
  amount: AbstractEdmFieldReadDecimal;
}


export interface AbstractEdmObjectReadSalesSaleActor extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataSalesSaleActor;
  emitter_legal_entity_name: AbstractEdmFieldReadString;
  emitter_address_line: AbstractEdmFieldReadString;
  emitter_additional_information: AbstractEdmFieldReadString;
  emitter_city: AbstractEdmFieldReadString;
  emitter_postal_code: AbstractEdmFieldReadString;
  emitter_country: AbstractEdmFieldReadList;
  emitter_region: AbstractEdmFieldReadList;
  emitter_bank_name: AbstractEdmFieldReadString;
  emitter_bank_account_name: AbstractEdmFieldReadString;
  emitter_bank_account_number: AbstractEdmFieldReadString;
  emitter_paypal: AbstractEdmFieldReadString;
  receiver_id: AbstractEdmFieldReadObjectContactContact;
  receiver_legal_entity_name: AbstractEdmFieldReadString;
  receiver_address_line: AbstractEdmFieldReadString;
  receiver_additional_information: AbstractEdmFieldReadString;
  receiver_city: AbstractEdmFieldReadString;
  receiver_postal_code: AbstractEdmFieldReadString;
  receiver_country: AbstractEdmFieldReadList;
  receiver_region: AbstractEdmFieldReadList;
}


export interface AbstractEdmObjectReadSalesSale {
  basic_data: AbstractEdmObjectReadSalesSaleBasicData;
  items: AbstractEdmObjectReadSalesSaleItem[];
  taxes: AbstractEdmObjectReadSalesSaleTax[];
  actor: AbstractEdmObjectReadSalesSaleActor;
}