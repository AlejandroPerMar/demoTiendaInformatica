import { AbstractEdmMetadataSalesInvoice, AbstractEdmMetadataSalesInvoiceBasicData } from '@sdk-datamodel-metadata/sales-invoice';
import { AbstractEdmObjectReadSalesSale } from '@sdk-datamodel-object/sales-sale/sales-sale.read.types';
import { AbstractEdmCoreDatasetRead, AbstractEdmCoreObjectRead } from '@sdk-edm/core';
import { AbstractEdmFieldReadDate } from '@sdk-edm/field-date';
import { AbstractEdmFieldReadObject, AbstractEdmFieldWriteObject } from '@sdk-edm/field-object';
import { AbstractEdmFieldReadRichText } from '@sdk-edm/field-rich-text';
import { AbstractEdmFieldReadString } from '@sdk-edm/field-string';
import { AbstractActorDeclaration } from '@sdk-ts/object-declaration';

import { EdmPayloadSalesInvoice } from './sales-invoice.payload';
import { AbstractEdmObjectPayloadSalesInvoice } from './sales-invoice.payload.types';


export interface AbstractEdmObjectReadSalesInvoiceBasicData extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataSalesInvoiceBasicData;
  purchase_order: AbstractEdmFieldReadString;
  due_date: AbstractEdmFieldReadDate;
  status: string;
  comments: AbstractEdmFieldReadRichText;
}


export interface AbstractEdmObjectReadSalesInvoice extends AbstractEdmObjectReadSalesSale, AbstractEdmCoreObjectRead<EdmPayloadSalesInvoice, AbstractEdmObjectPayloadSalesInvoice> {
  metadata: AbstractEdmMetadataSalesInvoice;
  invoice: AbstractEdmObjectReadSalesInvoiceBasicData;

  load(): void;
  release(): void;
}


export interface AbstractEdmFieldReadObjectSalesInvoice extends AbstractEdmFieldReadObject<EdmPayloadSalesInvoice, AbstractEdmObjectReadSalesInvoice> {
  type: string;
}


export interface AbstractEdmFieldWriteObjectSalesInvoice extends AbstractEdmFieldWriteObject<EdmPayloadSalesInvoice, AbstractEdmObjectReadSalesInvoice> {
  type: string;
  loadFullDefinition(client: AbstractActorDeclaration, objectId: string): Promise<AbstractEdmObjectReadSalesInvoice>;
}
