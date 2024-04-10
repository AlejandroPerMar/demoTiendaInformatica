import { AbstractEdmCoreObject } from '@sdk-edm/core';

import { EdmPayloadSalesInvoice } from './sales-invoice.payload';
import { AbstractEdmObjectReadSalesInvoice } from './sales-invoice.read.types';
import { AbstractEdmObjectWriteSalesInvoice } from './sales-invoice.write.types';


export interface AbstractEdmObjectPayloadSalesInvoice extends AbstractEdmCoreObject<EdmPayloadSalesInvoice, AbstractEdmObjectReadSalesInvoice, AbstractEdmObjectWriteSalesInvoice> {
}
