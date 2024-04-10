import { AbstractEdmMetadataDataset, AbstractEdmMetadataField } from '@sdk-edm/metadata';

export interface AbstractEdmMetadataSalesCatalogueCategoryBasicData extends AbstractEdmMetadataDataset {
  avatar: AbstractEdmMetadataField;
  banner_sm: AbstractEdmMetadataField;
  banner_md: AbstractEdmMetadataField;
  banner_lg: AbstractEdmMetadataField;
  banner_xl: AbstractEdmMetadataField;
  name: AbstractEdmMetadataField;
  description: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataSalesCatalogueCategory {
  basic_data: AbstractEdmMetadataSalesCatalogueCategoryBasicData;
}

