import { AbstractEdmMetadataWmsItem, AbstractEdmMetadataWmsItemRawMaterial } from '@sdk-datamodel-metadata/wms-item';
import { AbstractEdmObjectReadProductServiceDescription } from '@sdk-datamodel-object/product_service/product_service.read.types';
import { AbstractEdmCoreDatasetRead, AbstractEdmCoreObjectRead } from '@sdk-edm/core';
import { AbstractEdmFieldReadDecimal } from '@sdk-edm/field-decimal';
import { AbstractEdmFieldReadObject, AbstractEdmFieldWriteObject } from '@sdk-edm/field-object';
import { AbstractActorDeclaration } from '@sdk-ts/object-declaration';

import { EdmPayloadWmsItem } from './wms-item.payload';
import { AbstractEdmObjectPayloadWmsItem } from './wms-item.payload.types';


export interface AbstractEdmObjectReadWmsItemRawMaterial extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataWmsItemRawMaterial;
  item: AbstractEdmFieldReadObjectWmsItem;
  quantity: AbstractEdmFieldReadDecimal;
}


export interface AbstractEdmObjectReadWmsItem extends AbstractEdmCoreObjectRead<EdmPayloadWmsItem, AbstractEdmObjectPayloadWmsItem> {
  metadata: AbstractEdmMetadataWmsItem;
  basicData: AbstractEdmObjectReadProductServiceDescription;
  rawMaterials: AbstractEdmObjectReadWmsItemRawMaterial[];

  load(): void;
  release(): void;
}


export interface AbstractEdmFieldReadObjectWmsItem extends AbstractEdmFieldReadObject<EdmPayloadWmsItem, AbstractEdmObjectReadWmsItem> {
  type: string;
}


export interface AbstractEdmFieldWriteObjectWmsItem extends AbstractEdmFieldWriteObject<EdmPayloadWmsItem, AbstractEdmObjectReadWmsItem> {
  type: string;
  loadFullDefinition(client: AbstractActorDeclaration, objectId: string): Promise<AbstractEdmObjectReadWmsItem>;
}
