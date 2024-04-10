import { EdmPayload } from '@sdk-datamodel-object/payload';

export type EdmPayloadWmsItemReviewReview = {
  uuid: string
  userid: string,
  comment: string[],
  rating: number,
  timestamp: string,
}

export type EdmPayloadWmsItemReview = EdmPayload & {
  review: EdmPayloadWmsItemReviewReview,
}