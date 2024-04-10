import { AbstractEdmMetadataDataset, AbstractEdmMetadataField } from '@sdk-edm/metadata';

export interface AbstractEdmMetadataAccountingTaxBasicData extends AbstractEdmMetadataDataset {
  name: AbstractEdmMetadataField;
  rate: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataAccountingTax {
  basic_data: AbstractEdmMetadataAccountingTaxBasicData;
}

