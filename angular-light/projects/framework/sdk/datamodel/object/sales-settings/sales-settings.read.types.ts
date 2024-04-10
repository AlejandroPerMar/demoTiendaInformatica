import { AbstractEdmMetadataSalesSettings, AbstractEdmMetadataSalesSettingsBasicData } from '@sdk-datamodel-metadata/sales-settings';
import { AbstractEdmCoreDatasetRead, AbstractEdmCoreObjectRead } from '@sdk-edm/core';
import { AbstractEdmFieldReadImage } from '@sdk-edm/field-image';
import { AbstractEdmFieldReadList } from '@sdk-edm/field-list';
import { AbstractEdmFieldReadObject, AbstractEdmFieldWriteObject } from '@sdk-edm/field-object';
import { AbstractEdmFieldReadString } from '@sdk-edm/field-string';

import { EdmPayloadSalesSettings } from './sales-settings.payload';
import { AbstractEdmObjectPayloadSalesSettings } from './sales-settings.payload.types';


export interface AbstractEdmObjectReadSalesSettingsBasicData extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataSalesSettingsBasicData;
  logo: AbstractEdmFieldReadImage;
  invoice_model: number;
  delivery_model: number;
  quotation_model: number;
  receipt_model: number;
  legal_entity_name: AbstractEdmFieldReadString;
  address_line: AbstractEdmFieldReadString;
  additional_information: AbstractEdmFieldReadString;
  city: AbstractEdmFieldReadString;
  postal_code: AbstractEdmFieldReadString;
  country: AbstractEdmFieldReadList;
  region: AbstractEdmFieldReadList;
  bank_name: AbstractEdmFieldReadString;
  bank_account_name: AbstractEdmFieldReadString;
  bank_account_number: AbstractEdmFieldReadString;
  paypal: AbstractEdmFieldReadString;
}


export interface AbstractEdmObjectReadSalesSettings extends AbstractEdmCoreObjectRead<EdmPayloadSalesSettings, AbstractEdmObjectPayloadSalesSettings> {

  metadata: AbstractEdmMetadataSalesSettings;
  basicData: AbstractEdmObjectReadSalesSettingsBasicData;

  load(): void;
  release(): void;
}

export interface AbstractEdmFieldReadObjectSalesSettings extends AbstractEdmFieldReadObject<EdmPayloadSalesSettings, AbstractEdmObjectReadSalesSettings> {
  type: string;
}

export interface AbstractEdmFieldWriteObjectSalesSettings extends AbstractEdmFieldWriteObject<EdmPayloadSalesSettings, AbstractEdmObjectReadSalesSettings> {
  type: string;
}