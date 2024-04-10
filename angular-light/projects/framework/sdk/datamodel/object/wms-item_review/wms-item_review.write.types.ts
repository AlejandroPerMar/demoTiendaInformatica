import { AbstractEdmMetadataWmsItemReview, AbstractEdmMetadataWmsItemReviewReview } from '@sdk-datamodel-metadata/wms-item-review';
import { AbstractEdmCoreDatasetWrite, AbstractEdmCoreObjectWrite } from '@sdk-edm/core';
import { AbstractEdmFieldWriteMultiLineString } from '@sdk-edm/field-multi-line-string';
import { AbstractEdmFieldWriteNumeric } from '@sdk-edm/field-numeric';

import { EdmPayloadWmsItemReview } from './wms-item_review.payload';
import { AbstractEdmObjectPayloadWmsItemReview } from './wms-item_review.payload.types';


export interface AbstractEdmObjectWriteWmsItemReviewReview extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataWmsItemReviewReview;
  comment: AbstractEdmFieldWriteMultiLineString;
  rating: AbstractEdmFieldWriteNumeric;
}


export interface AbstractEdmObjectWriteWmsItemReview extends AbstractEdmCoreObjectWrite<EdmPayloadWmsItemReview, AbstractEdmObjectPayloadWmsItemReview> {

  metadata: AbstractEdmMetadataWmsItemReview;
  review: AbstractEdmObjectWriteWmsItemReviewReview;

  release(): void;
  createFormControl(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;
}
