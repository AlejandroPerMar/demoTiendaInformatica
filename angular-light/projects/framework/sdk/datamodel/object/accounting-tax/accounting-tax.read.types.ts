import { AbstractEdmMetadataAccountingTax, AbstractEdmMetadataAccountingTaxBasicData } from '@sdk-datamodel-metadata/accounting-tax';
import { AbstractEdmCoreDatasetRead, AbstractEdmCoreObjectRead } from '@sdk-edm/core';
import { AbstractEdmFieldReadDecimal } from '@sdk-edm/field-decimal';
import { AbstractEdmFieldReadObject, AbstractEdmFieldWriteObject } from '@sdk-edm/field-object';
import { AbstractEdmFieldReadString } from '@sdk-edm/field-string';

import { EdmPayloadAccountingTax } from './accounting-tax.payload';
import { AbstractEdmObjectPayloadAccountingTax } from './accounting-tax.payload.types';


export interface AbstractEdmObjectReadAccountingTaxBasicData extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataAccountingTaxBasicData;
  name: AbstractEdmFieldReadString;
  rate: AbstractEdmFieldReadDecimal;
}


export interface AbstractEdmObjectReadAccountingTax extends AbstractEdmCoreObjectRead<EdmPayloadAccountingTax, AbstractEdmObjectPayloadAccountingTax> {

  metadata: AbstractEdmMetadataAccountingTax;
  basicData: AbstractEdmObjectReadAccountingTaxBasicData;

  load(): void;
  release(): void;
}

export interface AbstractEdmFieldReadObjectAccountingTax extends AbstractEdmFieldReadObject<EdmPayloadAccountingTax, AbstractEdmObjectReadAccountingTax> {
  type: string;
}

export interface AbstractEdmFieldWriteObjectAccountingTax extends AbstractEdmFieldWriteObject<EdmPayloadAccountingTax, AbstractEdmObjectReadAccountingTax> {
  type: string;
}
