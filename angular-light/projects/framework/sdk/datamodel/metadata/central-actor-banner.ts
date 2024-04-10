import { AbstractEdmMetadataDataset, AbstractEdmMetadataField } from '@sdk-edm/metadata';

export interface AbstractEdmMetadataCentralActorBannerHeader extends AbstractEdmMetadataDataset {
  display_name: AbstractEdmMetadataField;
  slogan: AbstractEdmMetadataField;
  status: AbstractEdmMetadataField;
  alias: AbstractEdmMetadataField;
  avatar: AbstractEdmMetadataField;
  banner_sm: AbstractEdmMetadataField;
  banner_md: AbstractEdmMetadataField;
  banner_lg: AbstractEdmMetadataField;
  banner_xl: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataCentralActorBanner {
  header: AbstractEdmMetadataCentralActorBannerHeader;
}

