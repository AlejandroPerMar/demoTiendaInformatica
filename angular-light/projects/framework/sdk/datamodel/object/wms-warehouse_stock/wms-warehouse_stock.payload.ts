import { EdmPayload } from '@sdk-datamodel-object/payload';

export type EdmPayloadWmsWarehouseStock = EdmPayload & {
  quantity: string;
  alert: string;
  with_notification: boolean;
}