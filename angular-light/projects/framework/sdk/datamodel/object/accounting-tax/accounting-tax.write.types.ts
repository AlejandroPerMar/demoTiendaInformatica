import { AbstractEdmMetadataAccountingTax, AbstractEdmMetadataAccountingTaxBasicData } from '@sdk-datamodel-metadata/accounting-tax';
import { AbstractEdmCoreDatasetWrite, AbstractEdmCoreObjectWrite } from '@sdk-edm/core';
import { AbstractEdmFieldWriteDecimal } from '@sdk-edm/field-decimal';
import { AbstractEdmFieldWriteString } from '@sdk-edm/field-string';

import { EdmPayloadAccountingTax } from './accounting-tax.payload';
import { AbstractEdmObjectPayloadAccountingTax } from './accounting-tax.payload.types';


export interface AbstractEdmObjectWriteAccountingTaxBasicData extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataAccountingTaxBasicData;
  name: AbstractEdmFieldWriteString;
  rate: AbstractEdmFieldWriteDecimal;

  release(): void;
  createFormControl(): void;
  waitUntilReady(): Promise<any>;
  loadGUI(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;
}


export interface AbstractEdmObjectWriteAccountingTax extends AbstractEdmCoreObjectWrite<EdmPayloadAccountingTax, AbstractEdmObjectPayloadAccountingTax> {

  metadata: AbstractEdmMetadataAccountingTax;
  basicData: AbstractEdmObjectWriteAccountingTaxBasicData;

  release(): void;
  createFormControl(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;
}
