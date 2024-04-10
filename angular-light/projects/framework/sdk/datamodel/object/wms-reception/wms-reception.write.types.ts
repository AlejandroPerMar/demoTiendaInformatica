import { AbstractEdmMetadataWmsReception, AbstractEdmMetadataWmsReceptionInvoice, AbstractEdmMetadataWmsReceptionItem, AbstractEdmMetadataWmsReceptionTax } from '@sdk-datamodel-metadata/wms-reception';
import { AbstractEdmFieldWriteObjectAccountingTax } from '@sdk-datamodel-object/accounting-tax/accounting-tax.read.types';
import { AbstractEdmFieldWriteObjectContactContact } from '@sdk-datamodel-object/contact-contact/contact-contact.read.types';
import { AbstractEdmFieldWriteObjectWmsItem } from '@sdk-datamodel-object/wms-item/wms-item.read.types';
import { AbstractEdmFieldWriteObjectWmsWarehouse } from '@sdk-datamodel-object/wms-warehouse/wms-warehouse.read.types';
import { AbstractEdmCoreDatasetWrite, AbstractEdmCoreObjectWrite } from '@sdk-edm/core';
import { AbstractEdmFieldWriteArray } from '@sdk-edm/field-array';
import { AbstractEdmFieldWriteDate } from '@sdk-edm/field-date';
import { AbstractEdmFieldWriteDecimal } from '@sdk-edm/field-decimal';
import { AbstractEdmFieldWriteDocument } from '@sdk-edm/field-document';
import { AbstractEdmFieldWriteString } from '@sdk-edm/field-string';

import { EdmPayloadWmsReception } from './wms-reception.payload';
import { AbstractEdmObjectPayloadWmsReception } from './wms-reception.payload.types';


export interface AbstractEdmObjectWriteWmsReceptionInvoice extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataWmsReceptionInvoice;
  warehouse: AbstractEdmFieldWriteObjectWmsWarehouse;
  provider: AbstractEdmFieldWriteObjectContactContact;
  id: AbstractEdmFieldWriteString;
  date: AbstractEdmFieldWriteDate;
  documents: AbstractEdmFieldWriteArray<AbstractEdmFieldWriteDocument>;
  discount: AbstractEdmFieldWriteDecimal;
  total_price_no_tax: AbstractEdmFieldWriteDecimal;
  total_price_with_tax: AbstractEdmFieldWriteDecimal;

  get valid(): boolean;
  addDocument(): AbstractEdmFieldWriteDocument;
  resetProvider(newObjectId: string): Promise<void>;
}


export interface AbstractEdmObjectWriteWmsReceptionItem extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataWmsReceptionItem;
  item: AbstractEdmFieldWriteObjectWmsItem;
  quantity: AbstractEdmFieldWriteDecimal;
  unit_price: AbstractEdmFieldWriteDecimal;
  total_price: AbstractEdmFieldWriteDecimal;

  get valid(): boolean;
  empty(): boolean;
}


export interface AbstractEdmObjectWriteWmsReceptionTax extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataWmsReceptionTax;
  tax: AbstractEdmFieldWriteObjectAccountingTax;
  amount: AbstractEdmFieldWriteDecimal;
}


export interface AbstractEdmObjectWriteWmsReception extends AbstractEdmCoreObjectWrite<EdmPayloadWmsReception, AbstractEdmObjectPayloadWmsReception> {
  metadata: AbstractEdmMetadataWmsReception;
  invoice: AbstractEdmObjectWriteWmsReceptionInvoice;
  items: AbstractEdmObjectWriteWmsReceptionItem[];
  taxes: AbstractEdmObjectWriteWmsReceptionTax[];

  createFormControl(): void;
  release(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;

  addItem(): AbstractEdmObjectWriteWmsReceptionItem;
  addTax(): AbstractEdmObjectWriteWmsReceptionTax;
}
