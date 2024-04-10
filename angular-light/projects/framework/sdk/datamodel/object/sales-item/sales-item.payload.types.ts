import { AbstractEdmCoreObject } from '@sdk-edm/core';

import { EdmPayloadSalesItem } from './sales-item.payload';
import { AbstractEdmObjectReadSalesItem } from './sales-item.read.types';
import { AbstractEdmObjectWriteSalesItem } from './sales-item.write.types';


export interface AbstractEdmObjectPayloadSalesItem extends AbstractEdmCoreObject<EdmPayloadSalesItem, AbstractEdmObjectReadSalesItem, AbstractEdmObjectWriteSalesItem> {
}
