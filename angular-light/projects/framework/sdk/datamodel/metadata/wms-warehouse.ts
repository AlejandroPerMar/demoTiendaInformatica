import { AbstractEdmMetadataDataset, AbstractEdmMetadataField } from '@sdk-edm/metadata';

export interface AbstractEdmMetadataWmsWarehouseWarehouse extends AbstractEdmMetadataDataset {
  avatar: AbstractEdmMetadataField;
  name: AbstractEdmMetadataField;
  allow_order_to_provider: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataWmsWarehouse {
  warehouse: AbstractEdmMetadataWmsWarehouseWarehouse;
}

