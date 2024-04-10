import { AbstractEdmMetadataSalesInvoice, AbstractEdmMetadataSalesInvoiceBasicData } from '@sdk-datamodel-metadata/sales-invoice';
import { AbstractEdmObjectWriteSalesSale } from '@sdk-datamodel-object/sales-sale/sales-sale.write.types';
import { AbstractEdmCoreDatasetWrite, AbstractEdmCoreObjectWrite } from '@sdk-edm/core';
import { AbstractEdmFieldWriteDate } from '@sdk-edm/field-date';
import { AbstractEdmFieldWriteRichText } from '@sdk-edm/field-rich-text';
import { AbstractEdmFieldWriteString } from '@sdk-edm/field-string';

import { EdmPayloadSalesInvoice } from './sales-invoice.payload';
import { AbstractEdmObjectPayloadSalesInvoice } from './sales-invoice.payload.types';



export interface AbstractEdmObjectWriteSalesInvoiceBasicData extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataSalesInvoiceBasicData;
  purchase_order: AbstractEdmFieldWriteString;
  due_date: AbstractEdmFieldWriteDate;
  status: string;
  comments: AbstractEdmFieldWriteRichText;

  release(): void;
  createFormControl(): void;
  waitUntilReady(): Promise<any>;
  loadGUI(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;

}


export interface AbstractEdmObjectWriteSalesInvoice extends AbstractEdmObjectWriteSalesSale, AbstractEdmCoreObjectWrite<EdmPayloadSalesInvoice, AbstractEdmObjectPayloadSalesInvoice> {
  metadata: AbstractEdmMetadataSalesInvoice;
  invoice: AbstractEdmObjectWriteSalesInvoiceBasicData;

  createFormControl(): void;
  release(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;
}
