import { AbstractEdmCoreObject } from '@sdk-edm/core';

import { EdmPayloadAccountingTax } from './accounting-tax.payload';
import { AbstractEdmObjectReadAccountingTax } from './accounting-tax.read.types';
import { AbstractEdmObjectWriteAccountingTax } from './accounting-tax.write.types';

export interface AbstractEdmObjectPayloadAccountingTax extends AbstractEdmCoreObject<EdmPayloadAccountingTax, AbstractEdmObjectReadAccountingTax, AbstractEdmObjectWriteAccountingTax> {
}
