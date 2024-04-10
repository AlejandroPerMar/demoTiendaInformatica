import { AbstractEdmMetadataDataset, AbstractEdmMetadataField } from '@sdk-edm/metadata';

export interface AbstractEdmMetadataWmsTransferItem extends AbstractEdmMetadataDataset {
  itemid: AbstractEdmMetadataField;
  quantity: AbstractEdmMetadataField;
  status: AbstractEdmMetadataField;
  comments: AbstractEdmMetadataField;
  historic_timestamp: AbstractEdmMetadataField;
  historic_user: AbstractEdmMetadataField;
  historic_quantity: AbstractEdmMetadataField;
  historic_status: AbstractEdmMetadataField;
  historic_comments: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataWmsTransferTransfer extends AbstractEdmMetadataDataset {
  id: AbstractEdmMetadataField;
  warehouse_emmiter: AbstractEdmMetadataField;
  warehouse_receiver: AbstractEdmMetadataField;
  priority: AbstractEdmMetadataField;
  status: AbstractEdmMetadataField;
  comments: AbstractEdmMetadataField;
  comments_author: AbstractEdmMetadataField;
  comments_timestamp: AbstractEdmMetadataField;
  created_at: AbstractEdmMetadataField;
  created_by: AbstractEdmMetadataField;
  last_updated_at: AbstractEdmMetadataField;
  last_updated_by: AbstractEdmMetadataField;
  status_historic: AbstractEdmMetadataField;
  status_historic_user: AbstractEdmMetadataField;
  status_historic_timestamp: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataWmsTransfer {
  item: AbstractEdmMetadataWmsTransferItem;
  transfer: AbstractEdmMetadataWmsTransferTransfer;
}

