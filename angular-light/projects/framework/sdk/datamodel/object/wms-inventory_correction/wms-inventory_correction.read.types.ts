import { AbstractEdmMetadataWmsInventoryCorrection, AbstractEdmMetadataWmsInventoryCorrectionBasicData } from '@sdk-datamodel-metadata/wms-inventory-correction';
import { AbstractEdmFieldReadObjectWmsWarehouse } from '@sdk-datamodel-object/wms-warehouse/wms-warehouse.read.types';
import { AbstractEdmCoreDatasetRead, AbstractEdmCoreObjectRead } from '@sdk-edm/core';
import { AbstractEdmFieldReadMultiLineString } from '@sdk-edm/field-multi-line-string';
import { AbstractEdmFieldReadObject, AbstractEdmFieldWriteObject } from '@sdk-edm/field-object';
import { AbstractEdmFieldReadTimestamp } from '@sdk-edm/field-timestamp';
import { AbstractActorDeclaration } from '@sdk-ts/object-declaration';

import { AbstractEdmFieldReadObjectWmsItem } from './../wms-item/wms-item.read.types';
import { EdmPayloadWmsInventoryCorrection } from './wms-inventory_correction.payload';
import { AbstractEdmObjectPayloadWmsInventoryCorrection } from './wms-inventory_correction.payload.types';


export interface AbstractEdmObjectReadWmsInventoryCorrectionBasicData extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataWmsInventoryCorrectionBasicData;
  warehouse: AbstractEdmFieldReadObjectWmsWarehouse;
  item: AbstractEdmFieldReadObjectWmsItem;
  type: string;
  timestamp: AbstractEdmFieldReadTimestamp;
  reason: AbstractEdmFieldReadMultiLineString;
}


export interface AbstractEdmObjectReadWmsInventoryCorrection extends AbstractEdmCoreObjectRead<EdmPayloadWmsInventoryCorrection, AbstractEdmObjectPayloadWmsInventoryCorrection> {
  metadata: AbstractEdmMetadataWmsInventoryCorrection;
  basicData: AbstractEdmObjectReadWmsInventoryCorrectionBasicData;

  load(): void;
  release(): void;
}


export interface AbstractEdmFieldReadObjectWmsInventoryCorrection extends AbstractEdmFieldReadObject<EdmPayloadWmsInventoryCorrection, AbstractEdmObjectReadWmsInventoryCorrection> {
  type: string;
}


export interface AbstractEdmFieldWriteObjectWmsInventoryCorrection extends AbstractEdmFieldWriteObject<EdmPayloadWmsInventoryCorrection, AbstractEdmObjectReadWmsInventoryCorrection> {
  type: string;
  loadFullDefinition(client: AbstractActorDeclaration, objectId: string): Promise<AbstractEdmObjectReadWmsInventoryCorrection>;
}
