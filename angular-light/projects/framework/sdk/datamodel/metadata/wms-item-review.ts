import { AbstractEdmMetadataDataset, AbstractEdmMetadataField } from '@sdk-edm/metadata';

export interface AbstractEdmMetadataWmsItemReviewReview extends AbstractEdmMetadataDataset {
  userid: AbstractEdmMetadataField;
  comment: AbstractEdmMetadataField;
  rating: AbstractEdmMetadataField;
  timestamp: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataWmsItemReview {
  review: AbstractEdmMetadataWmsItemReviewReview;
}

