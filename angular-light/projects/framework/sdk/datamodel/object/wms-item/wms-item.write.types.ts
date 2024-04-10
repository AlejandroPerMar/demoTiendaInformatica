import { AbstractEdmMetadataWmsItem, AbstractEdmMetadataWmsItemRawMaterial } from '@sdk-datamodel-metadata/wms-item';
import { AbstractEdmObjectWriteProductServiceDescription } from '@sdk-datamodel-object/product_service/product_service.write.types';
import { AbstractEdmCoreDatasetWrite, AbstractEdmCoreObjectWrite } from '@sdk-edm/core';
import { AbstractEdmFieldWriteDecimal } from '@sdk-edm/field-decimal';

import { EdmPayloadWmsItem } from './wms-item.payload';
import { AbstractEdmObjectPayloadWmsItem } from './wms-item.payload.types';
import { AbstractEdmFieldWriteObjectWmsItem } from './wms-item.read.types';


export interface AbstractEdmObjectWriteWmsItemRawMaterial extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataWmsItemRawMaterial;
  item: AbstractEdmFieldWriteObjectWmsItem;
  quantity: AbstractEdmFieldWriteDecimal;
}


export interface AbstractEdmObjectWriteWmsItem extends AbstractEdmCoreObjectWrite<EdmPayloadWmsItem, AbstractEdmObjectPayloadWmsItem> {
  metadata: AbstractEdmMetadataWmsItem;
  basicData: AbstractEdmObjectWriteProductServiceDescription;
  rawMaterials: AbstractEdmObjectWriteWmsItemRawMaterial[];

  get validrawMaterials(): boolean;

  createFormControl(): void;
  release(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;

  addRawMaterial(): AbstractEdmObjectWriteWmsItemRawMaterial;
}
