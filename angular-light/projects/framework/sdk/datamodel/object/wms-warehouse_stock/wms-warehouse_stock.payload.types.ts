import { AbstractEdmCoreObject } from '@sdk-edm/core';

import { EdmPayloadWmsWarehouseStock } from './wms-warehouse_stock.payload';
import { AbstractEdmObjectReadWmsWarehouseStock } from './wms-warehouse_stock.read.types';
import { AbstractEdmObjectWriteWmsWarehouseStock } from './wms-warehouse_stock.write.types';

export interface AbstractEdmObjectPayloadWmsWarehouseStock extends AbstractEdmCoreObject<EdmPayloadWmsWarehouseStock, AbstractEdmObjectReadWmsWarehouseStock, AbstractEdmObjectWriteWmsWarehouseStock> {
}
