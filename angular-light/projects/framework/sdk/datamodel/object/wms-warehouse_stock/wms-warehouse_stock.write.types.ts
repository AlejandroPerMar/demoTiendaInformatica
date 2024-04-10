import { AbstractEdmMetadataWmsWarehouseStock, AbstractEdmMetadataWmsWarehouseStockStock } from '@sdk-datamodel-metadata/wms-warehouse-stock';
import { AbstractEdmCoreDatasetWrite, AbstractEdmCoreObjectWrite } from '@sdk-edm/core';
import { AbstractEdmFieldWriteBoolean } from '@sdk-edm/field-boolean';

import { EdmPayloadWmsWarehouseStock } from './wms-warehouse_stock.payload';
import { AbstractEdmObjectPayloadWmsWarehouseStock } from './wms-warehouse_stock.payload.types';


export interface AbstractEdmObjectWriteWmsWarehouseStockBasicData extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataWmsWarehouseStockStock;
  with_notification: AbstractEdmFieldWriteBoolean;

  release(): void;
  createFormControl(): void;
  waitUntilReady(): Promise<any>;
  loadGUI(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;
}


export interface AbstractEdmObjectWriteWmsWarehouseStock extends AbstractEdmCoreObjectWrite<EdmPayloadWmsWarehouseStock, AbstractEdmObjectPayloadWmsWarehouseStock> {

  metadata: AbstractEdmMetadataWmsWarehouseStock;
  basicData: AbstractEdmObjectWriteWmsWarehouseStockBasicData;

  release(): void;
  createFormControl(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;
}
