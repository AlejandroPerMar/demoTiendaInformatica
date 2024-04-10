import { AbstractEdmMetadataWmsItemReview, AbstractEdmMetadataWmsItemReviewReview } from '@sdk-datamodel-metadata/wms-item-review';
import { AbstractEdmCoreDatasetRead, AbstractEdmCoreObjectRead } from '@sdk-edm/core';
import { AbstractEdmFieldReadActor } from '@sdk-edm/field-actor';
import { AbstractEdmFieldReadMultiLineString } from '@sdk-edm/field-multi-line-string';
import { AbstractEdmFieldReadNumeric } from '@sdk-edm/field-numeric';
import { AbstractEdmFieldReadTimestamp } from '@sdk-edm/field-timestamp';

import { EdmPayloadWmsItemReview } from './wms-item_review.payload';
import { AbstractEdmObjectPayloadWmsItemReview } from './wms-item_review.payload.types';

export interface AbstractEdmObjectReadWmsItemReviewReview extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataWmsItemReviewReview;
  userid: AbstractEdmFieldReadActor;
  comment: AbstractEdmFieldReadMultiLineString;
  rating: AbstractEdmFieldReadNumeric;
  timestamp: AbstractEdmFieldReadTimestamp;
}


export interface AbstractEdmObjectReadWmsItemReview extends AbstractEdmCoreObjectRead<EdmPayloadWmsItemReview, AbstractEdmObjectPayloadWmsItemReview> {

  metadata: AbstractEdmMetadataWmsItemReview;
  review: AbstractEdmObjectReadWmsItemReviewReview;

  load(): void;
  release(): void;
  isEmpty(): boolean;
}
