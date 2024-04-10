import { AbstractEdmMetadataDataset, AbstractEdmMetadataField } from '@sdk-edm/metadata';

export interface AbstractEdmMetadataWmsInventoryCorrectionBasicData extends AbstractEdmMetadataDataset {
  warehouse: AbstractEdmMetadataField;
  item: AbstractEdmMetadataField;
  type: AbstractEdmMetadataField;
  timestamp: AbstractEdmMetadataField;
  reason: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataWmsInventoryCorrection {
  basic_data: AbstractEdmMetadataWmsInventoryCorrectionBasicData;
}

