import { AbstractEdmMetadataSalesItem } from '@sdk-datamodel-metadata/sales-item';
import { AbstractEdmObjectWriteProductServiceDescription } from '@sdk-datamodel-object/product_service/product_service.write.types';
import { AbstractEdmCoreObjectWrite } from '@sdk-edm/core';

import { EdmPayloadSalesItem } from './sales-item.payload';
import { AbstractEdmObjectPayloadSalesItem } from './sales-item.payload.types';


export interface AbstractEdmObjectWriteSalesItem extends AbstractEdmCoreObjectWrite<EdmPayloadSalesItem, AbstractEdmObjectPayloadSalesItem> {
  metadata: AbstractEdmMetadataSalesItem;
  basicData: AbstractEdmObjectWriteProductServiceDescription;

  createFormControl(): void;
  release(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;
}
