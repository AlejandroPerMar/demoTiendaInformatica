import { AbstractEdmMetadataSalesItem, AbstractEdmMetadataSalesItemDiscount, AbstractEdmMetadataSalesItemPrice, AbstractEdmMetadataSalesItemTax } from '@sdk-datamodel-metadata/sales-item';
import { AbstractEdmFieldReadObjectAccountingTax } from '@sdk-datamodel-object/accounting-tax/accounting-tax.read.types';
import { AbstractEdmObjectReadProductServiceDescription } from '@sdk-datamodel-object/product_service/product_service.read.types';
import { AbstractEdmCoreDatasetRead, AbstractEdmCoreObjectRead } from '@sdk-edm/core';
import { AbstractEdmFieldReadActor } from '@sdk-edm/field-actor';
import { AbstractEdmFieldReadDate } from '@sdk-edm/field-date';
import { AbstractEdmFieldReadDecimal } from '@sdk-edm/field-decimal';
import { AbstractEdmFieldReadObject, AbstractEdmFieldWriteObject } from '@sdk-edm/field-object';
import { AbstractEdmFieldReadTimestamp } from '@sdk-edm/field-timestamp';
import { AbstractActorDeclaration } from '@sdk-ts/object-declaration';

import { EdmPayloadSalesItem } from './sales-item.payload';
import { AbstractEdmObjectPayloadSalesItem } from './sales-item.payload.types';


export interface AbstractEdmObjectReadSalesItemDiscount extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataSalesItemDiscount;
  valid_from: AbstractEdmFieldReadDate;
  valid_to: AbstractEdmFieldReadDate;
  percentage: AbstractEdmFieldReadDecimal;
  amount: AbstractEdmFieldReadDecimal;
  created_at: AbstractEdmFieldReadTimestamp;
  created_by: AbstractEdmFieldReadActor;
}


export interface AbstractEdmObjectReadSalesItemPrice extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataSalesItemPrice;
  valid_from: AbstractEdmFieldReadDate;
  unit_price: AbstractEdmFieldReadDecimal;
  created_at: AbstractEdmFieldReadTimestamp;
  created_by: AbstractEdmFieldReadActor;
}


export interface AbstractEdmObjectReadSalesItemTax extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataSalesItemTax;
  tax: AbstractEdmFieldReadObjectAccountingTax;
}


export interface AbstractEdmObjectReadSalesItem extends AbstractEdmCoreObjectRead<EdmPayloadSalesItem, AbstractEdmObjectPayloadSalesItem> {
  metadata: AbstractEdmMetadataSalesItem;
  basicData: AbstractEdmObjectReadProductServiceDescription;
  discountsFuture: AbstractEdmObjectReadSalesItemDiscount[];
  discountCurrent: AbstractEdmObjectReadSalesItemDiscount;
  discountsPast: AbstractEdmObjectReadSalesItemDiscount[];
  prices: AbstractEdmObjectReadSalesItemPrice[];
  taxes: AbstractEdmObjectReadSalesItemTax[];
  showHistoricPrice: boolean;
  showHistoricDiscount: boolean;
  maxValidTo: string;

  load(): void;
  release(): void;
}


export interface AbstractEdmFieldReadObjectSalesItem extends AbstractEdmFieldReadObject<EdmPayloadSalesItem, AbstractEdmObjectReadSalesItem> {
  type: string;
}


export interface AbstractEdmFieldWriteObjectSalesItem extends AbstractEdmFieldWriteObject<EdmPayloadSalesItem, AbstractEdmObjectReadSalesItem> {
  type: string;
  loadFullDefinition(client: AbstractActorDeclaration, objectId: string): Promise<AbstractEdmObjectReadSalesItem>;
}
