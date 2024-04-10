import { AbstractEdmCoreObject } from '@sdk-edm/core';

import { EdmPayloadWmsWarehouse } from './wms-warehouse.payload';
import { AbstractEdmObjectReadWmsWarehouse } from './wms-warehouse.read.types';
import { AbstractEdmObjectWriteWmsWarehouse } from './wms-warehouse.write.types';

export interface AbstractEdmObjectPayloadWmsWarehouse extends AbstractEdmCoreObject<EdmPayloadWmsWarehouse, AbstractEdmObjectReadWmsWarehouse, AbstractEdmObjectWriteWmsWarehouse> {
}
