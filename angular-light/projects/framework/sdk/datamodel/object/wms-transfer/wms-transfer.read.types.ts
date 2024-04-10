import { AbstractEdmMetadataWmsTransfer, AbstractEdmMetadataWmsTransferItem, AbstractEdmMetadataWmsTransferTransfer } from '@sdk-datamodel-metadata/wms-transfer';
import { AbstractEdmFieldReadObjectWmsItem } from '@sdk-datamodel-object/wms-item/wms-item.read.types';
import { AbstractEdmFieldReadObjectWmsWarehouse } from '@sdk-datamodel-object/wms-warehouse/wms-warehouse.read.types';
import { AbstractEdmCoreDatasetRead, AbstractEdmCoreObjectRead } from '@sdk-edm/core';
import { AbstractEdmFieldReadActor } from '@sdk-edm/field-actor';
import { AbstractEdmFieldReadDecimal } from '@sdk-edm/field-decimal';
import { AbstractEdmFieldReadRichText } from '@sdk-edm/field-rich-text';
import { AbstractEdmFieldReadString } from '@sdk-edm/field-string';
import { AbstractEdmFieldReadTimestamp } from '@sdk-edm/field-timestamp';

import { EdmPayloadWmsTransfer } from './wms-transfer.payload';
import { AbstractEdmObjectPayloadWmsTransfer } from './wms-transfer.payload.types';


export interface AbstractEdmObjectReadWmsTransferTransferComments {
  comments: AbstractEdmFieldReadRichText;
  author: AbstractEdmFieldReadActor;
  timestamp: AbstractEdmFieldReadTimestamp;
}
export interface AbstractEdmObjectReadWmsTransferTransferHistoric {
  status: string;
  timestamp: AbstractEdmFieldReadTimestamp;
  user: AbstractEdmFieldReadActor;
}
export interface AbstractEdmObjectReadWmsTransferBasicData extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataWmsTransferTransfer;
  id: AbstractEdmFieldReadString;
  warehouse_emmiter: AbstractEdmFieldReadObjectWmsWarehouse;
  warehouse_receiver: AbstractEdmFieldReadObjectWmsWarehouse;
  priority: string;
  status: string;
  created_at: AbstractEdmFieldReadTimestamp;
  created_by: AbstractEdmFieldReadActor;
  last_updated_at: AbstractEdmFieldReadTimestamp;
  last_updated_by: AbstractEdmFieldReadActor;
  comments: AbstractEdmObjectReadWmsTransferTransferComments[];
  historic: AbstractEdmObjectReadWmsTransferTransferHistoric[];
  showHistoric: boolean;
}


export interface AbstractEdmObjectReadWmsTransferItemHistoric {
  user: AbstractEdmFieldReadActor;
  timestamp: AbstractEdmFieldReadTimestamp;
  comments: AbstractEdmFieldReadRichText;
  quantity: AbstractEdmFieldReadDecimal;
  status: string;
}
export interface AbstractEdmObjectReadWmsTransferItem extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataWmsTransferItem;
  item: AbstractEdmFieldReadObjectWmsItem;
  quantity: AbstractEdmFieldReadDecimal;
  warehouseQuantity: number;
  status: string;
  comments: AbstractEdmFieldReadRichText;
  historic: AbstractEdmObjectReadWmsTransferItemHistoric[];
  showHistoric: boolean;
}


export interface AbstractEdmObjectReadWmsTransfer extends AbstractEdmCoreObjectRead<EdmPayloadWmsTransfer, AbstractEdmObjectPayloadWmsTransfer> {
  metadata: AbstractEdmMetadataWmsTransfer;
  basicData: AbstractEdmObjectReadWmsTransferBasicData;
  items: AbstractEdmObjectReadWmsTransferItem[];
  new: boolean;

  load(): void;
  release(): void;
}
