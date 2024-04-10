import { AbstractEdmMetadataSalesSettings, AbstractEdmMetadataSalesSettingsBasicData } from '@sdk-datamodel-metadata/sales-settings';
import { AbstractEdmCoreDatasetWrite, AbstractEdmCoreObjectWrite } from '@sdk-edm/core';
import { AbstractEdmFieldWriteImage } from '@sdk-edm/field-image';
import { AbstractEdmFieldWriteList } from '@sdk-edm/field-list';
import { AbstractEdmFieldWriteString } from '@sdk-edm/field-string';

import { EdmPayloadSalesSettings } from './sales-settings.payload';
import { AbstractEdmObjectPayloadSalesSettings } from './sales-settings.payload.types';


export interface AbstractEdmObjectWriteSalesSettingsBasicData extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataSalesSettingsBasicData;
  logo: AbstractEdmFieldWriteImage;
  invoice_model: number,
  delivery_model: number,
  quotation_model: number,
  receipt_model: number,
  legal_entity_name: AbstractEdmFieldWriteString;
  address_line: AbstractEdmFieldWriteString;
  additional_information: AbstractEdmFieldWriteString;
  city: AbstractEdmFieldWriteString;
  postal_code: AbstractEdmFieldWriteString;
  country: AbstractEdmFieldWriteList;
  region: AbstractEdmFieldWriteList;
  bank_name: AbstractEdmFieldWriteString;
  bank_account_name: AbstractEdmFieldWriteString;
  bank_account_number: AbstractEdmFieldWriteString;
  paypal: AbstractEdmFieldWriteString;

  release(): void;
  createFormControl(): void;
  waitUntilReady(): Promise<any>;
  loadGUI(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;
}


export interface AbstractEdmObjectWriteSalesSettings extends AbstractEdmCoreObjectWrite<EdmPayloadSalesSettings, AbstractEdmObjectPayloadSalesSettings> {

  metadata: AbstractEdmMetadataSalesSettings;
  basicData: AbstractEdmObjectWriteSalesSettingsBasicData;

  release(): void;
  createFormControl(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;
}
