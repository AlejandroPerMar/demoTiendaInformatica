import { EdmPayload } from '@sdk-datamodel-object/payload';

export type EdmPayloadWmsInventoryCorrectionBasicData = {
  warehouse: string,
  item: string,
  type: string,
  timestamp: string,
  reason: string[],
}

export type EdmPayloadWmsInventoryCorrection = EdmPayload & {
  basic_data: EdmPayloadWmsInventoryCorrectionBasicData,
}