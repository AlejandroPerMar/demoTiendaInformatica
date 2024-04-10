import { AbstractEdmCoreObject } from '@sdk-edm/core';

import { EdmPayloadWmsItem } from './wms-item.payload';
import { AbstractEdmObjectReadWmsItem } from './wms-item.read.types';
import { AbstractEdmObjectWriteWmsItem } from './wms-item.write.types';


export interface AbstractEdmObjectPayloadWmsItem extends AbstractEdmCoreObject<EdmPayloadWmsItem, AbstractEdmObjectReadWmsItem, AbstractEdmObjectWriteWmsItem> {
}
