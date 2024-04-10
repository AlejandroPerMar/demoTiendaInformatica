import { AbstractEdmCoreObject } from '@sdk-edm/core';

import { EdmPayloadSalesSettings } from './sales-settings.payload';
import { AbstractEdmObjectReadSalesSettings } from './sales-settings.read.types';
import { AbstractEdmObjectWriteSalesSettings } from './sales-settings.write.types';

export interface AbstractEdmObjectPayloadSalesSettings extends AbstractEdmCoreObject<EdmPayloadSalesSettings, AbstractEdmObjectReadSalesSettings, AbstractEdmObjectWriteSalesSettings> {
}
