import { AbstractEdmMetadataWmsReception, AbstractEdmMetadataWmsReceptionInvoice, AbstractEdmMetadataWmsReceptionItem, AbstractEdmMetadataWmsReceptionTax, AbstractEdmMetadataWmsReceptionVersion } from '@sdk-datamodel-metadata/wms-reception';
import { AbstractEdmFieldReadObjectAccountingTax } from '@sdk-datamodel-object/accounting-tax/accounting-tax.read.types';
import { AbstractEdmFieldReadObjectContactContact } from '@sdk-datamodel-object/contact-contact/contact-contact.read.types';
import { AbstractEdmFieldReadObjectWmsItem } from '@sdk-datamodel-object/wms-item/wms-item.read.types';
import { AbstractEdmFieldReadObjectWmsWarehouse } from '@sdk-datamodel-object/wms-warehouse/wms-warehouse.read.types';
import { AbstractEdmCoreDatasetRead, AbstractEdmCoreObjectRead } from '@sdk-edm/core';
import { AbstractEdmFieldReadActor } from '@sdk-edm/field-actor';
import { AbstractEdmFieldReadBoolean } from '@sdk-edm/field-boolean';
import { AbstractEdmFieldReadDate } from '@sdk-edm/field-date';
import { AbstractEdmFieldReadDecimal } from '@sdk-edm/field-decimal';
import { AbstractEdmFieldReadDocument } from '@sdk-edm/field-document';
import { AbstractEdmFieldReadString } from '@sdk-edm/field-string';
import { AbstractEdmFieldReadTimestamp } from '@sdk-edm/field-timestamp';

import { EdmPayloadWmsReception } from './wms-reception.payload';
import { AbstractEdmObjectPayloadWmsReception } from './wms-reception.payload.types';


export interface AbstractEdmObjectReadWmsReceptionInvoice extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataWmsReceptionInvoice;
  warehouse: AbstractEdmFieldReadObjectWmsWarehouse;
  provider: AbstractEdmFieldReadObjectContactContact;
  id: AbstractEdmFieldReadString;
  date: AbstractEdmFieldReadDate;
  documents: AbstractEdmFieldReadDocument[];
  discount: AbstractEdmFieldReadDecimal;
  total_price_no_tax: AbstractEdmFieldReadDecimal;
  total_price_with_tax: AbstractEdmFieldReadDecimal;
}


export interface AbstractEdmObjectReadWmsReceptionItem extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataWmsReceptionItem;
  item: AbstractEdmFieldReadObjectWmsItem;
  quantity: AbstractEdmFieldReadDecimal;
  unit_price: AbstractEdmFieldReadDecimal;
  total_price: AbstractEdmFieldReadDecimal;
}


export interface AbstractEdmObjectReadWmsReceptionTax extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataWmsReceptionTax;
  tax: AbstractEdmFieldReadObjectAccountingTax;
  amount: AbstractEdmFieldReadDecimal;
}

export interface AbstractEdmObjectReadWmsReceptionVersion extends AbstractEdmCoreDatasetRead {
  version: string;
  metadata: AbstractEdmMetadataWmsReceptionVersion;
  created_at: AbstractEdmFieldReadTimestamp;
  created_by: AbstractEdmFieldReadActor;
  deleted: AbstractEdmFieldReadBoolean;
  invoice: AbstractEdmObjectReadWmsReceptionInvoice;
  items: AbstractEdmObjectReadWmsReceptionItem[];
  taxes: AbstractEdmObjectReadWmsReceptionTax[];
}


export interface AbstractEdmObjectReadWmsReception extends AbstractEdmCoreObjectRead<EdmPayloadWmsReception, AbstractEdmObjectPayloadWmsReception> {
  metadata: AbstractEdmMetadataWmsReception;
  version: AbstractEdmObjectReadWmsReceptionVersion[];

  load(): void;
  release(): void;
}
