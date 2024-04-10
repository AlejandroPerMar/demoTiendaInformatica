import { AbstractEdmCoreObject } from '@sdk-edm/core';

import { EdmPayloadWmsReception } from './wms-reception.payload';
import { AbstractEdmObjectReadWmsReception } from './wms-reception.read.types';
import { AbstractEdmObjectWriteWmsReception } from './wms-reception.write.types';



export interface AbstractEdmObjectPayloadWmsReception extends AbstractEdmCoreObject<EdmPayloadWmsReception, AbstractEdmObjectReadWmsReception, AbstractEdmObjectWriteWmsReception> {
}
