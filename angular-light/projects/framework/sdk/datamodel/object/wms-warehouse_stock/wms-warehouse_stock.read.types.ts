import { AbstractEdmMetadataWmsWarehouseStock, AbstractEdmMetadataWmsWarehouseStockStock } from '@sdk-datamodel-metadata/wms-warehouse-stock';
import { AbstractEdmCoreDatasetRead, AbstractEdmCoreObjectRead } from '@sdk-edm/core';
import { AbstractEdmFieldReadBoolean } from '@sdk-edm/field-boolean';
import { AbstractEdmFieldReadDecimal } from '@sdk-edm/field-decimal';

import { EdmPayloadWmsWarehouseStock } from './wms-warehouse_stock.payload';
import { AbstractEdmObjectPayloadWmsWarehouseStock } from './wms-warehouse_stock.payload.types';


export interface AbstractEdmObjectReadWmsWarehouseStockBasicData extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataWmsWarehouseStockStock;
  quantity: AbstractEdmFieldReadDecimal;
  alert: AbstractEdmFieldReadDecimal;
  with_notification: AbstractEdmFieldReadBoolean;
}


export interface AbstractEdmObjectReadWmsWarehouseStock extends AbstractEdmCoreObjectRead<EdmPayloadWmsWarehouseStock, AbstractEdmObjectPayloadWmsWarehouseStock> {

  metadata: AbstractEdmMetadataWmsWarehouseStock;
  basicData: AbstractEdmObjectReadWmsWarehouseStockBasicData;

  load(): void;
  release(): void;
}
