import { AbstractEdmMetadataWmsWarehouse, AbstractEdmMetadataWmsWarehouseWarehouse } from '@sdk-datamodel-metadata/wms-warehouse';
import { AbstractEdmCoreDatasetRead, AbstractEdmCoreObjectRead } from '@sdk-edm/core';
import { AbstractEdmFieldReadBoolean } from '@sdk-edm/field-boolean';
import { AbstractEdmFieldReadImage } from '@sdk-edm/field-image';
import { AbstractEdmFieldReadObject, AbstractEdmFieldWriteObject } from '@sdk-edm/field-object';
import { AbstractEdmFieldReadString } from '@sdk-edm/field-string';

import { EdmPayloadWmsWarehouse } from './wms-warehouse.payload';
import { AbstractEdmObjectPayloadWmsWarehouse } from './wms-warehouse.payload.types';


export interface AbstractEdmObjectReadWmsWarehouseBasicData extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataWmsWarehouseWarehouse;
  avatar: AbstractEdmFieldReadImage;
  name: AbstractEdmFieldReadString;
  allow_order_to_provider: AbstractEdmFieldReadBoolean;
}


export interface AbstractEdmObjectReadWmsWarehouse extends AbstractEdmCoreObjectRead<EdmPayloadWmsWarehouse, AbstractEdmObjectPayloadWmsWarehouse> {

  metadata: AbstractEdmMetadataWmsWarehouse;
  basicData: AbstractEdmObjectReadWmsWarehouseBasicData;

  load(): void;
  release(): void;
}

export interface AbstractEdmFieldReadObjectWmsWarehouse extends AbstractEdmFieldReadObject<EdmPayloadWmsWarehouse, AbstractEdmObjectReadWmsWarehouse> {
  type: string;
}

export interface AbstractEdmFieldWriteObjectWmsWarehouse extends AbstractEdmFieldWriteObject<EdmPayloadWmsWarehouse, AbstractEdmObjectReadWmsWarehouse> {
  type: string;
}