import { AbstractEdmMetadataWmsWarehouse, AbstractEdmMetadataWmsWarehouseWarehouse } from '@sdk-datamodel-metadata/wms-warehouse';
import { AbstractEdmCoreDatasetWrite, AbstractEdmCoreObjectWrite } from '@sdk-edm/core';
import { AbstractEdmFieldWriteBoolean } from '@sdk-edm/field-boolean';
import { AbstractEdmFieldWriteImage } from '@sdk-edm/field-image';
import { AbstractEdmFieldWriteString } from '@sdk-edm/field-string';

import { EdmPayloadWmsWarehouse } from './wms-warehouse.payload';
import { AbstractEdmObjectPayloadWmsWarehouse } from './wms-warehouse.payload.types';


export interface AbstractEdmObjectWriteWmsWarehouseBasicData extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataWmsWarehouseWarehouse;
  avatar: AbstractEdmFieldWriteImage;
  name: AbstractEdmFieldWriteString;
  allow_order_to_provider: AbstractEdmFieldWriteBoolean;

  release(): void;
  createFormControl(): void;
  waitUntilReady(): Promise<any>;
  loadGUI(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;
}


export interface AbstractEdmObjectWriteWmsWarehouse extends AbstractEdmCoreObjectWrite<EdmPayloadWmsWarehouse, AbstractEdmObjectPayloadWmsWarehouse> {

  metadata: AbstractEdmMetadataWmsWarehouse;
  basicData: AbstractEdmObjectWriteWmsWarehouseBasicData;

  release(): void;
  createFormControl(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;
}
