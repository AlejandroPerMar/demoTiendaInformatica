import { AbstractEdmMetadataDataset, AbstractEdmMetadataField } from '@sdk-edm/metadata';

export interface AbstractEdmMetadataWmsWarehouseStockStock extends AbstractEdmMetadataDataset {
  quantity: AbstractEdmMetadataField;
  alert: AbstractEdmMetadataField;
  with_notification: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataWmsWarehouseStock {
  stock: AbstractEdmMetadataWmsWarehouseStockStock;
}

